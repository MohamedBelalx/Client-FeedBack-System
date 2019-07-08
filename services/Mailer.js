const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail{
    
    constructor({subject,targets},content){
        super();
        this.sgApi = sendgrid(keys.sendGridKey);
        this.from_email = new helper.Email('no-reply@mbmailer.com');
        this.subject = subject;
        this.body = new helper.Content('text/html',content);
        this.targets = this.formateAddresses(targets);

        this.addContent(this.body);
        this.addClickTracking();
        this.addTargets();
    }
    formateAddresses(targets){
        return targets.map(({email})=>{
            return new helper.Email(email);
        });
    }
    addClickTracking(){
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true,true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);


    }
    addTargets(){
        const personlize = new helper.Personalization();
        this.targets.forEach(targets => {
            personlize.addTo(targets);
        });
        this.addPersonalization(personlize);
    }

    async send(){
        const request = this.sgApi.emptyRequest({
            method:'POST',
            path:'/v3/mail/send',
            body:this.toJSON()
        });
        const response = await this.sgApi.API(request);
        return response;
    }
}
//recipients
module.exports = Mailer;
