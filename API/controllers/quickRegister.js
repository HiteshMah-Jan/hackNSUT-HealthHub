const randomstring = require("randomstring");
const nodemailer = require('nodemailer');

const sendEmail = (sname, semail, seyeFID) => {
	console.log("Oh Yeah");
	var transporter = nodemailer.createTransport({
        host: 'infotsav.in',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'admin', // generated ethereal user
            pass: 'igtsea6am' // generated ethereal password
        }
    });
    transporter.verify(function(error, success) {
	   if (error) {
	        console.log('miserable', error);
	   } else {
	        console.log('Server is ready to take our messages');

	        let mailOptions = {
		        from: '"Infotsav" <admin@infotsav.in>', // sender address
		        to: semail, // list of receivers
		        subject: 'Registration Acknowledgement for Infotsav', // Subject line
		        headers: {
			        'List-Unsubscribe': '<mailto:unsubscribe@infotsav.in?subject=unsubscribe&body=unsubscribe%20me>',
			        'Precedence': 'bulk'
			    },
		        text: 'Hey '+sname+', We received a request for registration in Infotsav 19 with email '+semail+'. Your account has been activated and you can login using the following credentials: Email: '+semail+' Password: '+seyeFID+' You must login to complete pending payments. Team Infotsav', // plain text body
		        //html: '<p>Your request for registration in Infotsav 19 has been recieved. Please verify your email account to complete the registration process </p> <a href="'+verifyLink+'">'+verifyLink+'</a><br /><br />Team Infotsav' // html body
		        html: '<!DOCTYPE html><html lang="en" ><head><meta charset="UTF-8"><title>Please confirm your Infotsav Account</title> </head><body><table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: #f5f8fa; min-width: 350px; font-size: 1px; line-height: normal;"><tr><td align="center" valign="top"><!--[if (gte mso 9)|(IE)]><table border="0" cellspacing="0" cellpadding="0"><tr><td align="center" valign="top" width="750"><![endif]--><table cellpadding="0" cellspacing="0" border="0" width="750" class="table750" style="width: 100%; max-width: 750px; min-width: 350px; background: #0f111a;"><tr><td class="mob_pad" width="25" style="width: 25px; max-width: 25px; min-width: 25px;">&nbsp;</td><td align="center" valign="top" style="background: #0f111a; color: #fff;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100% !important; min-width: 100%; max-width: 100%; background: #0f111a;"><tr><td align="right" valign="top"><div class="top_pad" style="height: 25px; line-height: 25px; font-size: 23px;">&nbsp;</div></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;"><tr><td align="center" valign="top"><div style="height: 40px; line-height: 40px; font-size: 38px;">&nbsp;</div><a href="https://infotsav.in" style="display: block; max-width: 192px;"><img src="https://infotsav.in/headers.png" alt="infotsav" width="80" border="0" style="display: block; width: 80px;" /></a><div class="top_pad2" style="height: 48px; line-height: 48px; font-size: 46px;">&nbsp;</div></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;"><tr><td align="left" valign="top"><font face="\'Source Sans Pro\', sans-serif" color="#fff" style="font-size: 52px; line-height: 54px; font-weight: 300; letter-spacing: -1.5px;"><span style="font-family: \'Source Sans Pro\', Arial, Tahoma, Geneva, sans-serif; color: #fff; font-size: 52px; line-height: 54px; font-weight: 300; letter-spacing: -1.5px;">Account Registration Successful</span></font><div style="height: 21px; line-height: 21px; font-size: 19px;">&nbsp;</div><font face="\'Source Sans Pro\', sans-serif" color="#fff" style="font-size: 20px; line-height: 28px;"><span style="font-family: \'Source Sans Pro\', Arial, Tahoma, Geneva, sans-serif; color: #fff; font-size: 20px; line-height: 28px;">Hey '+sname+',</span></font><div style="height: 6px; line-height: 6px; font-size: 4px;">&nbsp;</div><font face="\'Source Sans Pro\', sans-serif" color="#fff" style="font-size: 20px; line-height: 28px;"><span style="font-family: \'Source Sans Pro\', Arial, Tahoma, Geneva, sans-serif; color: #fff; font-size: 20px; line-height: 28px;">We received a request for registration in Infotsav 19 with email '+semail+'. Your account has been activated and you can login using the following credentials: <br />Email: '+semail+'<br />Password: '+seyeFID+'<br /> <br />You must login to complete pending payments.<br />Cheers!<br />Team Infotsav</span></font><div style="height: 30px; line-height: 30px; font-size: 28px;">&nbsp;</div><div style="height: 90px; line-height: 90px; font-size: 88px;">&nbsp;</div></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100% !important; min-width: 100%; max-width: 100%; background: #0f111a;"><tbody><tr><td align="center" valign="top"><font face="\'Source Sans Pro\', sans-serif" color="#868686"line-height: 20px;"><span style="font-family: \'Source Sans Pro\', Arial, Tahoma, Geneva, sans-serif; color: #dbc8c8; font-size: 15px; line-height: 20px;">Infotsav 19<br>ABV IIITM, Gwalior, Madhya Pradesh (474015)      </span></font><div style="height: 4px; line-height: 4px; font-size: 2px;">&nbsp;</div><div style="height: 3px; line-height: 3px; font-size: 1px;">&nbsp;</div><div style="height: 35px; line-height: 35px; font-size: 33px;">&nbsp;</div></td></tr></tbody></table></td></tr></table><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr></table></body></html>'
		    };
		    transporter.sendMail(mailOptions, (error, info) => {
		        if (error) {
		            return console.log(error);
		        }
		        console.log('Message sent: %s', info.messageId);
		        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
		    });
	   }
	});
	
}

const isUniqueIFID = (db, IFID) =>{
	var booll = false;
	db.select('*').from('users').where({ifid: IFID})
	.then(users => {
		if(users.length === 0){
			booll = true;
		}
		else { 
			booll = false;
		};
	})
	return booll;	
}

const generateIFID = (db, name) => {
	let IFID = 'IN-';
	let nameChars = name.replace(/[\s.]/g, "").toUpperCase().substr(0,2);
	IFID = IFID+nameChars+'-'+randomstring.generate({length:3, charset:'numeric'});
	let unique = isUniqueIFID(db, IFID);
	if(true){
		return IFID;
	}
	else generateIFID(db, name);
}

const handleQuickRegister = (req,res, db, bcrypt, xss) =>{
	const xssOptions = {
		whiteList: [],
		stripIgnoreTag: [],
		stripIgnoreTagBody: ['script']
	};
	// const {email, name, college, city, phone, gender, password} =xss(req.body.contactData, );
	const email = xss(req.body.contactData.email, xssOptions);
	const name = xss(req.body.contactData.name, xssOptions);
	const college = xss(req.body.contactData.college, xssOptions);
	const phone = xss(req.body.contactData.phone, xssOptions);
	const eid = xss(req.body.contactData.event, xssOptions);
	console.log(req.body.contactData);

	const eyeFID = generateIFID(db, name);
	const city = 'Gwalior';
	const password = eyeFID;
	const gender = 'other';

	if(!email || !name || !password || !college || !city || !phone || !gender)
	{
		return res.status(400).json('Incorrect form submission');
	}
	db.select('*').from('users').where({email})
	.then((data) =>{
		if(data.length)
			res.status(400).json('User already registered!');
		else{
			bcrypt.hash(password, null, null, function(err, hash) {
				if(err) console.log(err);
				return db.transaction(trx=>{
					return trx.insert({
						email: email,
						password: hash
					})
					.into('credentials')
					.then(() =>{
						return trx('users')
						.insert({
							email: email, 
							name: name,
							college: college,
							gender: gender,
							city: city,
							mobile: phone,
							ifid: eyeFID,
							confirm: 1
						})
						.then(() => {
							const init = 1;
							let teamid;
							if(init){
								teamid = eyeFID+'-'+eid+randomstring.generate(2);
							}
							return trx.select('*').from('event_reg').where({ifid: eyeFID, eid})
							.then(reges =>{
								if(reges.length)
									return res.status(400).json('Already registered!');
								else{
									return trx('event_reg').insert({
										ifid: eyeFID,
										eid: eid,
										teamid: teamid
									})
									.then(() => {
										if(init){
											return trx('payment')
											.insert({
												teamid: teamid,
												status: 0
											})
											.then(() => {
												res.status(200).json({
													email: email,
													ifid: eyeFID
												});
												sendEmail(name, email, eyeFID);
											})
											.then(trx.commit)
										}
									})
									.catch(trx.rollback)
								}
							})
							.catch(trx.rollback)
						})
					})
					.catch(trx.rollback)
				})
				.catch(err => {console.log(err); res.status(400).json('Something went wrong!')});
			})
		}
	});
}


module.exports = {
	handleQuickRegister: handleQuickRegister
};