import React,{Component} from 'react'
import './AddAnnouncment.scss'
import ImgLoad from '../AdminPanel/ImgLoad'
import {sendData} from '../UserFunctions'
import jwt_decode from 'jwt-decode'


export default class AddAnnouncment extends Component{
    state={
        texniks:[
            {
              id:0,tex:'Trucks',  cars:[{
                    id:0,carName:'Kamaz',model:[
                        {id:1,modelCar:'kamaz',price:10000,year:[
                                {id:11,years:2000,mator:[
                                        {id:111,Tsaval:5.5},
                                        {id:112,Tsaval:6.6},
                                        {id:113,Tsaval:5.2}
                                    ]}
                            ]}
                    ]
                }],

            },
            {
                id:1,tex:'Cars',  cars:[
                    {id:0,carName:'Mercedes',model:[
                            {id:1,modelCar:'A-class',price:5000,year:[
                                    {id:11,years:2005,mator:[
                                            {id:111,Tsaval:2.5},
                                            {id:112,Tsaval:2.8},
                                            {id:113,Tsaval:3.0},
                                        ]},
                                    {id:12,years:2007,mator:[
                                            {id:111,Tsaval:3.0},
                                            {id:112,Tsaval:3.2},
                                            {id:113,Tsaval:3.0},
                                        ]},
                                    {id:13,years:2009,mator:[
                                            {id:111,Tsaval:3.2},
                                            {id:112,Tsaval:3.2},
                                            {id:113,Tsaval:3.0},
                                        ]}
                                ]},
                            {id:2,modelCar:'C-class',price:6000,year:[
                                    {id:11,years:2010,mator:[
                                            {id:111,Tsaval:1.8},
                                            {id:112,Tsaval:2.0},
                                            {id:113,Tsaval:2.2},
                                        ]},
                                    {id:12,years:2011,mator:[
                                            {id:111,Tsaval:2.5},
                                            {id:112,Tsaval:2.8},
                                            {id:113,Tsaval:3.0},
                                        ]},
                                    {id:13,years:2013,mator:[
                                            {id:111,Tsaval:2.5},
                                            {id:112,Tsaval:2.8},
                                            {id:113,Tsaval:3.0},
                                        ]}
                                ]},
                            {id:3,modelCar:'G-class',price:10000,year:[
                                    {id:11,years:2015,mator:[
                                            {id:111,Tsaval:4.0},
                                            {id:112,Tsaval:4.4},
                                            {id:113,Tsaval:4.4},
                                        ]},
                                    {id:12,years:2017,mator:[
                                            {id:111,Tsaval:2.5},
                                            {id:112,Tsaval:2.8},
                                            {id:113,Tsaval:3.0},
                                        ]},
                                    {id:13,years:2020,mator:[
                                            {id:111,Tsaval:4.4},
                                            {id:112,Tsaval:5.0},
                                            {id:113,Tsaval:5.5},
                                        ]}
                                ]}
                        ]
                    },
                    {id:1,carName:'BMW',model:[
                            {id:1,modelCar:'M5',price:5000,year:[
                                    {id:11,years:2005,mator:[
                                            {id:111,Tsaval:2.5},
                                            {id:112,Tsaval:2.8},
                                            {id:113,Tsaval:3.0},
                                        ]},
                                    {id:12,years:2007,mator:[
                                            {id:111,Tsaval:2.8},
                                            {id:112,Tsaval:2.8},
                                            {id:113,Tsaval:3.0},
                                        ]},
                                    {id:13,years:2009,mator:[
                                            {id:111,Tsaval:3.5},
                                            {id:112,Tsaval:2.0},
                                            {id:113,Tsaval:3.0},
                                        ]}
                                ]},
                            {id:2,modelCar:'M4',price:6000,year:[
                                    {id:11,years:2010,mator:[
                                            {id:111,Tsaval:2.8},
                                            {id:112,Tsaval:2.8},
                                            {id:113,Tsaval:3.0},
                                        ]},
                                    {id:12,years:2011,mator:[
                                            {id:111,Tsaval:3.5},
                                            {id:112,Tsaval:3.8},
                                            {id:113,Tsaval:3.0},
                                        ]},
                                    {id:13,years:2013,mator:[
                                            {id:111,Tsaval:3.0},
                                            {id:112,Tsaval:2.8},
                                            {id:113,Tsaval:3.0},
                                        ]}
                                ]},
                            {id:3,modelCar:'M6',price:10000,year:[
                                    {id:11,years:2015,mator:[
                                            {id:111,Tsaval:2.4},
                                            {id:112,Tsaval:2.8},
                                            {id:113,Tsaval:3.2},
                                        ]},
                                    {id:12,years:2017,mator:[
                                            {id:111,Tsaval:2.8},
                                            {id:112,Tsaval:2.8},
                                            {id:113,Tsaval:3.0},
                                        ]},
                                    {id:13,years:2020,mator:[
                                            {id:111,Tsaval:3.2},
                                            {id:112,Tsaval:4.4},
                                            {id:113,Tsaval:3.0},
                                        ]}
                                ]}
                        ]
                    },
                    {id:2,carName:'Audi',model:[
                            {id:1,modelCar:'A6',price:5000,year:[
                                    {id:11,years:2005,mator:[
                                            {id:111,Tsaval:2.5},
                                            {id:112,Tsaval:2.8},
                                            {id:113,Tsaval:3.0},
                                        ]},
                                    {id:12,years:2007,mator:[
                                            {id:111,Tsaval:2.5},
                                            {id:112,Tsaval:2.8},
                                            {id:113,Tsaval:3.0},
                                        ]},
                                    {id:13,years:2009,mator:[
                                            {id:111,Tsaval:2.5},
                                            {id:112,Tsaval:2.8},
                                            {id:113,Tsaval:3.0},
                                        ]}
                                ]},
                            {id:2,modelCar:'A8',price:6000,year:[
                                    {id:11,years:2010,mator:[
                                            {id:111,Tsaval:2.8},
                                            {id:112,Tsaval:2.8},
                                            {id:113,Tsaval:3.0},
                                        ]},
                                    {id:12,years:2011,mator:[
                                            {id:111,Tsaval:3.0},
                                            {id:112,Tsaval:2.8},
                                            {id:113,Tsaval:3.0},
                                        ]},
                                    {id:13,years:2013,mator:[
                                            {id:111,Tsaval:3.2},
                                            {id:112,Tsaval:2.8},
                                            {id:113,Tsaval:3.0},
                                        ]}
                                ]},
                            {id:3,modelCar:'Q7',price:10000,year:[
                                    {id:11,years:2015,mator:[
                                            {id:111,Tsaval:3.5},
                                            {id:112,Tsaval:2.8},
                                            {id:113,Tsaval:3.0},
                                        ]},
                                    {id:12,years:2017,mator:[
                                            {id:111,Tsaval:3.2},
                                            {id:112,Tsaval:2.8},
                                            {id:113,Tsaval:3.0},
                                        ]},
                                    {id:13,years:2020,mator:[
                                            {id:111,Tsaval:5.5},
                                            {id:112,Tsaval:3.8},
                                            {id:113,Tsaval:4.4},
                                        ]}
                                ]}
                        ]
                    },


                ],

            }
        ],
        btnChange:false,
        btnChange2:false,
        btnChangeYear:false,
        btnMot:false,
        btntex:false,
        tex:'',
        car1:'',
        modCar:'',
        carYear:'',
        carMotor:'',
        textArea:'',
        priceVal:'',
        car:[],
        fileSelected:null,
        img:[],
        userProfile:null,
        Detail:[
            {id:0,DetailName:'brake system'},
            {id:1,DetailName:'engine'},
            {id:2,DetailName:'body'},
            {id:3,DetailName:'amortisator'},
            {id:4,DetailName:'hood'},
            {id:5,DetailName:'windows'},
            {id:6,DetailName:'accessories'},
        ],
        details:'',

    }
    onImgSubmit = (e)=>{
         
        e.preventDefault();
        if(this.state.fileSelected === null){
          return  this.setings.apdateProduct = 'null;'
        }
        const formData = new FormData()
        for (const key of Object.keys(this.state.fileSelected)) {
         console.log(this.state.fileSelected[key]);
         formData.append('imgCollection', this.state.fileSelected[key])
     }
        sendData('stok/imgDownload',formData,{})
        .then(respons=>{
                  this.setState({img:respons.data.fileName})
                  if(!respons.data.error){
           this.setings.apdateProduct = respons;
           this.setState({img:respons.data.fileName})
             }else{
               this.setings.apdateProduct ='null;'
               this.setState({img:[]})
              
             };
     }).catch(err=>{
       this.setings.apdateProduct = {err:err} 
       this.setState({img:[]})
       console.log(err)})
     
     }
     onChangeimg = e=> this.setState({fileSelected:e.target.files})
    changerange = (e) => {
        this.setState({
            inpVal: e.target.value
        })
    }
    setings = {
        onChangeimg:this.onChangeimg,
        apdateProduct:'',  
        err:''
    }

    btntexniks=(j)=>{
        this.state.tex = this.state.texniks.find(e=>j.target.value == e.id)
        this.setState({
            btntex:true,
            btnChange:false,
            btnChange2:false,
            btnChangeYear:false,
            btnMot:false
        })
    }


    btnCars =(e)=>{
        this.state.car1  = this.state.tex.cars.find(f=> e.target.value == f.id)
        this.setState({
            btnChange:true,
            btnChange2:false,
            btnChangeYear:false,
            btnMot:false
        })

    }
    btnModel = (k)=>{
        this.state.modCar = this.state.car1.model.find(d=>k.target.value == d.id)
        this.setState({
            btnChange2:true,
            btnChangeYear:false,
            btnMot:false
        })
    }
    btnYear =(e)=>{
        this.state.carYear =this.state.modCar.year.find(d=>e.target.value == d.id)
        this.setState({
            btnChangeYear:true,
            btnMot:false
        })
    }

    btnADD = () => {
        this.state.car.push({
            id:Date.now(),
            carTex:this.state.tex.tex,
            carType : this.state.car1.carName,
            carModel : this.state.modCar.modelCar,
            carYear : this.state.carYear.years,
            carMator : this.state.carMotor.Tsaval,
            textInformation:this.state.textArea,
            price:this.state.priceVal,
            img:this.state.img,
            details:this.state.details
        })
       
      
        console.log(this.state.car)

        this.setState({
            car1:'',
            modCar:'',
            carYear:'',
            carMotor:'',
            btnChange:false,
            btnChange2:false,
            btnChangeYear:false,
            btnMot:false,
            textArea:'',
            img:''
        });
        this.fetching()
        
    }
    btnMotor=(k)=>{
        this.state.carMotor = this.state.carYear.mator.find(e => e.id == k.target.value)
        this.setState({
            btnMot:true,
        })
    }
    fetching(){
        const token = localStorage.myusertoken
        if(token){
           
            const decoded = jwt_decode(token)
                           this.setState({userProfile:decoded},()=>{
                            const datta = {
                                user:this.state.userProfile,
                                car:this.state.car
                            }
                            sendData('avds/register',datta)
                            .then(response=>{
                              alert('yor advertisements registered')
                              this.setState({car:[]})
                              console.log(this.props.fetchPosts(decoded))
                            })
                            .catch(err=>{
                                console.log(err);
                                this.setState({car:[]})

                            })
                           })
                          
                 }
                
       
    }

    render() {
        return(
            <div className={'teqniques'}>
                <div className={'formData'}>
                    <div>
                        <p>Select Car Type</p>
                        <select className="form-control" name="" id="" onChange={this.btntexniks.bind(this)} placeholder='Select Car'>
                            <option value='' >Car's Type</option>
                            {this.state.texniks.map((e,i)=>{
                                return  <option key={i} value={e.id} >{e.tex}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <p>Select Car</p>
                        <select className="form-control" name="" id="" onChange={this.btnCars.bind(this)} placeholder='Select Car'>
                            <option value='' >Car's Name</option>
                            {this.state.btntex && this.state.tex.id == 1?this.state.texniks[1].cars.map((e,i)=>{
                                return  <option key={i} value={e.id} >{e.carName}</option>
                            }):this.state.btntex && this.state.tex.id == 0 ?this.state.texniks[0].cars.map((e,i)=>{
                                return  <option key={i} value={e.id} >{e.carName}</option>
                            }):null}
                        </select>
                    </div>


                    
                    <div >
                        <p>Select Model</p>
                        <select className="form-control" onChange={this.btnModel.bind(this)} name="" id="" placeholder='Select Model '>
                            <option value="" >Model</option>
                            {this.state.btnChange?this.state.car1.model.map((e,i)=>{
                                return <option key={i} value={e.id}>{e.modelCar}</option>
                            }):null}
                        </select>
                    </div>
                </div>
                <div className={'select_car'}>

                    <div>
                        <p>Select Year</p>
                        <select onChange={this.btnYear.bind(this)} name="" id="" placeholder='Select Year' className="form-control">
                            <option value="DEFAULT" >Year</option>
                            {this.state.btnChange2?this.state.modCar.year.map((e,i)=>{
                                return <option key={i} value={e.id}>{e.years}</option>
                            }):null}
                        </select>
                    </div>
                    <div >
                        <p>Select Type</p>
                        <select name="" id="" onChange={this.btnMotor.bind(this)} placeholder='Select Type' className="form-control">
                            <option value="DEFAULT" >Engine</option>
                            {this.state.btnChangeYear?this.state.carYear.mator.map((e,i)=>{
                                return <option key={i} value={e.id}>{e.Tsaval}</option>
                            }):null}
                        </select>
                    </div>
                    <div>
                        <p>Select Type Of Detail</p>
                        <select name="" id="" onChange={e=>this.setState({details:e.target.value})}  placeholder='Select Type' className="form-control">
                            <option value="DEFAULT" >Car's Detail</option>
                            {this.state.btnChangeYear?this.state.Detail.map((e,i)=>{
                                return <option key={i} value={e.DetailName}>{e.DetailName}</option>
                            }):null}
                        </select>
                    </div>

                </div>
                <div className={'add_price'}>
                    <p>Add Price</p>
                    <div className="inp_size">
                        <input className={'form-control text-center'} type="text" value={this.state.priceVal} onChange={e=>this.setState({priceVal:e.target.value})}/>
                    </div>
                </div>

                <div className={'add_description'}>
                    <p>Add Description</p>
                    <textarea className={'form-control'} value={this.state.textArea} onChange={e=>this.setState({textArea:e.target.value})} name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div className={'add_photo'}>
                    <p >Add Photo</p>
                   <ImgLoad onImgSubmit={this.onImgSubmit} onChangeimg={this.setings}/>
                    {/*<PicturesWall/>PicturesWall*/}
                    {/*<button onClick={()=>console.log(this.state.userProfile,'olla')}>okkkk</button>*/}

                </div>
                <div className={'addann'} >
                    <input   type='submit' value={'Add Announcment'} onClick={this.btnADD}/>
                </div>
            </div>
        )
    }


}