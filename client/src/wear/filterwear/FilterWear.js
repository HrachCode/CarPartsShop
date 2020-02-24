import React, {Component} from 'react'
import './FilterWear.scss'

import SpareParts from "../../components/spareparts/SpareParts";


export default class FilterWear extends Component {

    state = {
        isVisible: false,
        ethnicIsVisible: false,
        shoesIsVisible: false,
        capIsVisible: false,
        checked: false,
        weartypeone: ['Clothing','Wallets','Footwear','Watches','Accessories','Bags','Caps & Hats'],
        weartypetwo: ['Jewellery','Sunglasses','Parfumes','Beauty','Shirts','Sunglasses','Swimwear'],
        weartypethree: ['Caps', 'SunGlasses', 'Shoes'],
        weartypefour: ['SunGlasses', 'SunGlasses', 'Pants', 'Trousers'],
        checktwo: false,
        checkthree: false,
        checkfour: false,
        checkfive: false,
        genderone: 'mens',
        gendertwo: 'womens',
        value: 5,
        value1: {
            min: 5,
            max: 10,
        },
        inpVal: 50,
        cars:[
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
        btnChange:false,
        btnChange2:false,
        btnChangeYear:false,
        btnMot:false,
        car1:'',
        modCar:'',
        carYear:'',
        carMotor:'',
        car:{carType:'',carModel:'',carYear:'',carMator:''},
    }

    changerange = (e) => {
        this.setState({
            inpVal: e.target.value
        })
    }

    btnCars =(e)=>{
       this.state.car1  = this.state.cars.find(f=> e.target.value == f.id)
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


    sortby = () => {
       this.state.car.carType = this.state.car1.carName
        this.state.car.carModel = this.state.modCar.modelCar
        this.state.car.carYear = this.state.carYear.years
        this.state.car.carMator = this.state.carMotor.Tsaval
        this.setState({})
        this.props.findAndFilter(this.state.car)
    }
    btnMotor=(k)=>{
        this.state.carMotor = this.state.carYear.mator.find(e => e.id == k.target.value)
        this.setState({
            btnMot:true,
        })
    }

    render() {

        return(
            <div>
                <div className="container_part">
                    <div className="filter">
                        <div className={'price'}>
                            {/*<div className={'byprice'}>*/}
                            {/*    /!*<h2> FILTER BY <span>PRICE</span> </h2>*!/*/}
                            {/*</div>*/}
                            {/*<div className={'range'}>*/}
                            {/*    <input type="range" onChange={this.changerange} />*/}
                            {/*    <input type="text" value={`$ ${this.state.inpVal}`} onChange={this.klor} className={'between'}/>*/}
                            {/*</div>*/}
                            <div className="categories">
                                <div className={'categorieswear'}>
                                    <h3>CATEGORIES</h3>
                                </div>
                                <div className={'contain'}>
                                    <form action="" onSubmit={e => e.preventDefault()}>
                                        <select className={'Sel1'} placeholder={'Car\'s Name'} onChange={this.btnCars.bind(this)}  >
                                            <option value='' >Car's Name</option>
                                            {this.state.cars.map((e,i)=>{
                                                return  <option key={i} value={e.id} >{e.carName}</option>
                                            })}
                                        </select>
                                        <select onChange={this.btnModel.bind(this)} className={'Sel1 Sel2'}   >
                                            <option value="" >Model</option>
                                            {this.state.btnChange?this.state.car1.model.map((e,i)=>{
                                                return <option key={i} value={e.id}>{e.modelCar}</option>
                                            }):null}
                                        </select>

                                        <select onChange={this.btnYear.bind(this)}  className={'Sel1 Sel2'}  >
                                            <option value="DEFAULT" >Year</option>
                                            {this.state.btnChange2?this.state.modCar.year.map((e,i)=>{
                                                return <option key={i} value={e.id}>{e.years}</option>
                                            }):null}
                                        </select>
                                        <select onChange={this.btnMotor.bind(this)}  className={'Sel1 Sel2'}  >
                                            <option value="DEFAULT" >Engine</option>
                                            {this.state.btnChangeYear?this.state.carYear.mator.map((e,i)=>{
                                                return <option key={i} value={e.id}>{e.Tsaval}</option>
                                            }):null}
                                        </select>
                                        <input type='submit' value={'Search'} onClick={this.sortby}/>
                                    </form>
                                </div>
                            </div>
                            <div className="community">
                                {/*<div className={'communitypoll'}>*/}
                                {/*    <h3>COMMUNITY POLL</h3>*/}
                                {/*</div>*/}
                                <div className={'checkboxes'}>
                                    {/*<Checkboxes clickcheck={this.clickCheck}*/}
                                    {/*            checked={this.state.checked}*/}
                                    {/*            checkedtwo={this.state.checktwo}*/}
                                    {/*            checkedthree={this.state.checkthree}*/}
                                    {/*            checkedfour={this.state.checkfour}*/}
                                    {/*            checkedfive={this.state.checkfive}*/}
                                    {/*            clickchecktwo={()=>this.setState({ checked: !this.state.checked})}*/}
                                    {/*            clickcheckthree={()=> this.setState({checkthree: !this.state.checkthree})}*/}
                                    {/*            clickcheckfour={()=>this.setState({ checkfour: !this.state.checkfour })}*/}
                                    {/*            clickcheckfive={()=> this.setState({  checkfive: !this.state.checkfive })}*/}
                                    {/*            getProduct={this.props.getProduct}*/}
                                    {/*            lower={this.props.lower}*/}
                                    {/*            track={this.props.track}*/}
                                    {/*            bigger={this.props.bigger}*/}
                                    {/*            colors={this.props.colors}*/}
                                    {/*            backmoney={this.props.backmoney}*/}
                                    {/*/>*/}
                                </div>
                            </div>
                        </div>
                        <div className={'compare'}>
                            <div className="slidefilter">
                                {/*<Compare />*/}
                                {/*<Sliderfitler />*/}
                                {/*<Colections colect={this.props.colect} />*/}
                                  <SpareParts bigFilter={this.props.bigFilter} scroll={this.props.scroll}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
