import React from 'react';
import pic from '../../../empty/emptydatark.jpg'
import 'antd/dist/antd.css';

import { List } from 'antd';



  const Pagination = (props) => {
    const listData = [];
    for (let i = 0; i < 8; i++) {
      listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      });
    }
    
    
   
      return(
           <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={props.arr}
   
    renderItem={item => (
      <List.Item>   
      
      <div key={item.email} className={'adver'}  onClick={()=>props.showaparts(item)}>
                                        <div className={'indiv'}>  
                                                          {item.img.length > 1 ? <img src={`./img/${item.img[0]}`} alt=""/> : item.img.length === 0 ?
                                               <img src={pic} alt="img"/> : item.img.length === 1 ? item.img.map((e,i)=>{
                                                     return(
                                                       <img key={i} onClick={()=>console.log(e)} src={`./img/${e}`} alt="img"/>
                                                    )})
                                                   : null}
                                           <div className={'mej'}>
                                              <div className={'adstitle'}>

                                                 <p >{item.carType} {item.carModel} {item.carMator} {item.carYear}y.  {item.price}$ </p>
                                                            <h3 className="userData">   {item.email}      {item.first_name}</h3>

                                                 <span>{item.textInformation}</span>

                                              </div>

                                           </div>

                                        </div>

                                     </div>
      </List.Item>
    )}
  />
      )
  }

  export default  Pagination
