//const { userInfo } = require('os');
const { Model, DataTypes } = require('sequelize')
const sequelize = require('./db.js')



class Crew extends Model{}
Crew.init({
    name:{type:DataTypes.STRING},
    surame:{type:DataTypes.STRING},
    licenseNo:{type:DataTypes.STRING},
    company:{type:DataTypes.STRING},
    position:{type:DataTypes.STRING},
    jobNo:{type:DataTypes.STRING}
},{sequelize})



class Balus extends Model{}
Balus.init({
    registeration:{type:DataTypes.STRING},
    aircraftModel:{type:DataTypes.STRING},
    yearOfBuild:{type:DataTypes.STRING},
    serialNo:{type:DataTypes.STRING},
    totalAirframeHours:{type:DataTypes.STRING},
    totalAirframeLandings:{type:DataTypes.STRING}
},{sequelize})

class Maintenance extends Model{}
Maintenance.init({
    cat:{type:DataTypes.STRING},
    current:{type:DataTypes.BOOLEAN},
    build:{type:DataTypes.STRING},
    model:{type:DataTypes.STRING},
    serialNo:{type:DataTypes.STRING},
    task:{type:DataTypes.STRING},
    interval:{type:DataTypes.STRING},
    units:{type:DataTypes.STRING},
    taskdesc:{type:DataTypes.STRING},
    notes:{type:DataTypes.STRING},
    lastDone:{type:DataTypes.STRING},
    name:{type:DataTypes.STRING},
    surname:{type:DataTypes.STRING},
    licenseNo:{type:DataTypes.STRING},
    partSerialNo:{type:DataTypes.STRING},
    partNo:{type:DataTypes.STRING},
    code:{type:DataTypes.STRING}

},{sequelize})


sequelize.sync().then(()=>{
    console.log(`Database & tables created!`); });

    const dummyData = async ()=>{
    await Balus.bulkCreate([
        {registeration:'VH-KQM',
        serialNo:'SN2197',
        aircraftModel:'islander',
        yearOfBuild:'1988',
        totalAirframeHours:'14077.4',
        totalAirframeLandings:'29634'},

        {registeration:'VH-KQN',
        serialNo:'SN2198',
        aircraftModel:'cessna',
        yearOfBuild:'1988',
        totalAirframeHours:'15077.4',
        totalAirframeLandings:'29634'},

        {registeration:'VH-KQO',
        serialNo:'SN2199',
        aircraftModel:'twinotter',
        yearOfBuild:'1988',
        totalAirframeHours:'15077.4',
        totalAirframeLandings:'29634'},
        
        {registeration:'VH-KQP',
        serialNo:'SN2200',
        aircraftModel:'dash8',
        yearOfBuild:'1988',
        totalAirframeHours:'15077.4',
        totalAirframeLandings:'29634'}

    ])
    await Maintenance.bulkCreate([


        {cat:'asm',current:true,
         build:'1988',model:'islander',serialNo:'SN2197',task:'50 hour inspection',
        interval:'50',units:'FH',taskdesc:'Oil and Filter Change',notes:'done',
        lastDone:'15077.4',
        name:'mark',
        surname:'umin',licenseNo:'p20301',partSerialNo:'1234',partNo:'567',
        code:'8910'
         },

        {cat:'asm',current:true,
         build:'1988',model:'islander',serialNo:'SN2197',task:'Manufactures Schedule',
        interval:'100',units:'FH',taskdesc:'100 Hourly Inspection',notes:'done',
        lastDone:'15077.4',
        name:'mark',
        surname:'umin',licenseNo:'p20301',partSerialNo:'1234',partNo:'567',
        code:'8910'
        },

        {cat:'asm',current:true,
        build:'1988',model:'islander',serialNo:'SN2197',
        task:'Manufactures Schedule',interval:'500',
        units:'FH',
        taskdesc:'406 ELT Insp.  Ref: AWB 25-023 issue 1',
        notes:'P/N: 453-6603',   lastDone:'15077.4',
        name:'mark',             surname:'umin',
        licenseNo:'p20301',      partSerialNo:'1234',
        partNo:'567',code:'8910'
       },

       {cat:'asm',current:true,
        build:'1988',model:'islander',   serialNo:'SN2197',
        task:'ELT Batt Renew',          interval:'5',
        units:'Yrs',                  taskdesc:'Battery Replacement',
        notes:'P/N: 452-6499',          lastDone:'18 Jan 2013'
        },

        {cat:'asm',current:true,
        build:'1988',model:'islander',   serialNo:'SN2197',
        task:'ELT 6 month check',          interval:'6',
        units:'Mths',                  taskdesc:'Battery Replacement',
        notes:'P/N: 452-6499',          lastDone:'18 Jan 2013'
        },

        {cat:'asm',current:true,
        build:'1988',model:'islander',serialNo:'SN2197',
        task:'CAO 100.7	',
       interval:'3',units:'Yrs',taskdesc:'Re Weigh',notes:'WB-5448',
       lastDone:'01 Jul 2013'
       },

       {cat:'cais',
       current:true,
       build:'1988',
       model:'islander',
       serialNo:'SN2197',
       task:'Vac Reg Filter',
       interval:'100',
        units:'FH',
       taskdesc:'Replacement',
       notes:'Refer M.M.',
       lastDone:'15077.4',
       },

       {cat:'cais',
       current:true,
       build:'1988',
       model:'islander',
       serialNo:'SN2197',
       task:'Vac System Filter',
       interval:'500',
        units:'FH',
       taskdesc:'Replacement',
       notes:'Refer M.M.',
       lastDone:'15077.4',
       },

       {cat:'cais',
       current:true,
       build:'1988',
       model:'islander',
       serialNo:'SN2197',
       task:'Aux Fuel Pump Filter',
       interval:'300',
        units:'FH',
       taskdesc:'Clean',
       notes:'Refer M.M.',
       lastDone:'15077.4',
       },

       {cat:'cais',
       current:true,
       build:'1988',
       model:'islander',
       serialNo:'SN2197',
       task:'Overvolt Relays',
       interval:'1',
        units:'Yrs',
       taskdesc:'Test (Removed)',
       notes:'Refer M.M.',
       lastDone:'22 Jul 2013'
       },

       {cat:'cais',
       current:true,
       build:'1988',
       model:'islander',
       serialNo:'SN2197',
       task:'Aux Fuel Pump Filter',
       interval:'300	',
        units:'FH',
       taskdesc:'Clean',
       notes:'Refer M.M.',
       lastDone:'15077.4',
       },

       {cat:'cais',
       current:true,
       build:'1988',
       model:'islander',
       serialNo:'SN2197',
       task:'Engine Tachos',
       interval:'1',
        units:'Yrs',
       taskdesc:'Check Calibration',
       notes:'Refer M.M.',
       lastDone:'22 Jul 2013',
       },

       {cat:'ad',
       current:true,
       build:'1988',
       model:'islander',
       serialNo:'SN2197',
       task:'AD/BN2/9A4',
       interval:'50',
        units:'FH',
       taskdesc:'Elevator Trim Inspection',
       notes:'SB49(3)',
       lastDone:'15077.4',
       },

       {cat:'ad',
       current:true,
       build:'1988',
       model:'islander',
       serialNo:'SN2197',
       task:'AD/BN2/33A1',
       interval:'500',
        units:'FH',
       taskdesc:'Rudder Hinges',
       notes:'SB76(4)',
       lastDone:'15077.4',
       },

       {cat:'lhprop',
       current:true,
       build:'1988',
       model:'islander',
       serialNo:'SN2197',
       task:'    AD/PROP/1A2	',
       interval:'2400	',
        units:'FH	',
       taskdesc:'Overhaul Propeller		',
       notes:'',
       lastDone:'15077.4',
       },

       {cat:'rhprop',
       current:true,
       build:'1988',
       model:'islander',
       serialNo:'SN2197',
       task:'Aux Fuel Pump Filter',
       interval:'300	',
        units:'FH',
       taskdesc:'Clean',
       notes:'Refer M.M.',
       lastDone:'15077.4',
       },

       {cat:'lheng',
       current:true,
       build:'1988',
       model:'islander',
       serialNo:'SN2197',
       task:'Aux Fuel Pump Filter',
       interval:'300	',
        units:'FH',
       taskdesc:'Clean',
       notes:'Refer M.M.',
       lastDone:'15077.4',
       },
       {cat:'rheng',
       current:true,
       build:'1988',
       model:'islander',
       serialNo:'SN2197',
       task:'Aux Fuel Pump Filter',
       interval:'300	',
        units:'FH',
       taskdesc:'Clean',
       notes:'Refer M.M.',
       lastDone:'15077.4',
       }

    ])
    await Crew.bulkCreate([
        {name:'Mark',
        surame:'Umin',
        licenseNo:'P20301',
        company:'Arcooz',
        position:'Maintnenance Controller',
        jobNo:'1234'}
    ])
}
    //dummyData();
    module.exports = {
        Maintenance, 
        Balus,
        Crew
    }  

    