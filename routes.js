const { Router } = require('express')
const {Maintenance, Balus, Crew} = require('./model')
const path = require('path');
require('dotenv').config()

//const cors = require('cors')
/*var whitelist = ['http://localhost:8000','http://localhost:8000/']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}*/


const router = Router()


//request data to be dispalyed on the frontend
router.get('/balus', async function(req, res) {


  let reco= []
  let fhnow,ldngsnow
     await Balus.findAll({where:{serialNo:req.query.sn}})
     .then(ans => Object.entries(ans)
     .map(([key,value]) => {
       fhnow = value.totalAirframeHours 
       reco.push(value) 
      }))
     await Maintenance.findAll({where:{serialNo:req.query.sn,current:true}})
     .then(ans => Object.entries(ans).map(([key,value]) => {
 
     
     switch(value.units){
       
       case 'Days':
        let today = new Date()
        new Date(today.setDate(value.lastDone.getDate() + value.interval))
            break;
       case 'Mths':
        let monthLastDone = new Date(value.lastDone) 
        let monthNxtDue = new Date(monthLastDone.setMonth(monthLastDone.getMonth() + Number(value.interval) ))
        let monthTimeToGo = String((monthNxtDue  -  new Date())/86400000)
        monthTimeToGo = monthTimeToGo.slice(0,monthTimeToGo.indexOf('.')) 
        value.dataValues.timeToGo = monthTimeToGo + ' days'
        value.dataValues.nextDue = monthNxtDue.toDateString()
        reco.push(value)
            break;
       case 'Yrs':
        let year = new Date()
        let yearLastDone = new Date(value.lastDone) 
        let yearNxtDue = new Date(yearLastDone.setFullYear(yearLastDone.getFullYear() + Number(value.interval) ))
        let yearTimeToGo = String((yearNxtDue  -  new Date())/86400000)
        yearTimeToGo = yearTimeToGo.slice(0,yearTimeToGo.indexOf('.'))
        value.dataValues.timeToGo = yearTimeToGo + ' days'
        value.dataValues.nextDue = yearNxtDue.toDateString()
        reco.push(value)
            break;
       case 'FH':
        let hours = Number(value.lastDone)
        let hrsNxtDue = hours + Number(value.interval)
        let hrsTimeToGo = hrsNxtDue - fhnow
        value.dataValues.timeToGo = hrsTimeToGo + ' hrs'
        value.dataValues.nextDue = hrsNxtDue
        reco.push(value)
            break;
      case 'Ldgs':
        let landings = Number(value.lastDone)
        let ldngsNxtDue = landings + Number(value.interval)
        let ldngsTimeToGo = ldngsNxtDue - ldngsnow
        value.dataValues.timeToGo = ldngsTimeToGo + ' ldngs'
        value.dataValues.nextDue = ldngsNxtDue
        reco.push(value)
            break;
       case 'Cycles':
       // reco.push(value)
            break;
     }

      }))
    res.send(reco)

  })

//update entry records
router.post('/update', async function(req, res) {
 let {id, cat, build, model, task, interval, units,serialNo, taskdesc, 
    notes, lastDone, nextDue, timeToGo, fullname, surname 
    ,licenseNo, partSerialNo, partNo, code , sn, tah,tal} = req.body

 if(id){
     await Maintenance.findOne({where:{id:id}})
     .then(async (mainres)=>{


      await Maintenance.create({

        cat:mainres.cat,             current:true,
        build:mainres.build,         model:mainres.model,
        serialNo:mainres.serialNo,   task:mainres.task,
        interval:mainres.interval,   units:mainres.units,
        taskdesc:mainres.taskdesc,   lastDone: lastDone  ,       
        notes:notes,                 name:fullname,               
        surname:surname,             licenseNo:licenseNo,         
        partSerialNo:partSerialNo,   partNo:partNo,               
        code:code
       })

    })
    await Maintenance.update({current:false},{where:{id:id}})
    res.redirect(window.location.origin + model)}
  else if(sn && Number(tah) && Number(tal)){
      await Balus.update({
          totalAirframeHours:tah,
          totalAirframeLandings:tal},
          {where:{serialNo:sn}})
          res.redirect(window.location.origin + model)
  }else{
   res.redirect(window.location.origin + '/dash8')
  }
})


router.get('*',function(req, res){
  res.sendFile(path.join(__dirname , 'build','index.html'))
})






module.exports = router

