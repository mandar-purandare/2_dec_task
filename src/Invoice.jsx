import React, { useEffect, useState } from 'react'
import './Invoice.css'

function Invoice() {

    const [table, setTable] = useState([]);

    const [row, setRow] = useState({quantity:0,
                                     costPrice:0,
                                     marginPer:'',
                                     margin:'', 
                                     salesPrice:'',
                                     totalSalesPrice:'',
                                     discountPer:'',
                                     discount:'',
                                     taxPer:'',
                                     tax:'',
                                     finalSalesPrice:0});

    function generateInvoice(event){
        event.preventDefault();
        setTable([...table,{...row}]);
        console.log(table);
    }

    function handleChange(event){
        // if(event.target.name === 'quantity'){
        //     var quantity = event.target.value;
        //     // alert(quanity);
        // }
        // if(event.target.name === 'costPrice'){
        //     var costPrice = event.target.value;
        //     // alert(costPrice);
        // }
        // if(event.target.name === 'finalSalesPrice'){
        //     event.target.value = quanity*costPrice;
        //     // alert(event.target.value);
        // }
        // let finalSalesPriceCalc = row.quantity*row.costPrice;
        // alert(row.quantity*row.costPrice);   
        // alert(costPrice);

        setRow({...row,[event.target.name]: event.target.value});
        // console.log(row);
        // alert(finalSalesPrice)
       
    }

    useEffect(()=> {
        setRow({...row,finalSalesPrice:row.quantity*row.costPrice})
    },)

    

  return (
    <div className='invoice-container'>
        <div className='invoice-calculator'>
            <form onSubmit={generateInvoice}>
                <h1>Invoice Calculator</h1>
                <label>Quantity</label><br/>
                <input onChange={handleChange} type='tel' name='quantity'/><br/>
                <label>Cost Price</label><br/>
                <input onChange={handleChange} type='tel' name='costPrice'/><br/>
                <label>Margin %</label><br/>
                <input onChange={handleChange} type='tel' name='margin'/><br/>
                <label>Discount %</label><br/>
                <input onChange={handleChange} type='tel' name='discount'/><br/>
                <label>Tax %</label><br/>
                <input onChange={handleChange} type='tel' name='tax'/><br/><br/>
                <input type='submit'/>
            </form>
        </div>

        <div className='invoice-card'>
            <table>
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Cost Price</th>
                        <th>Margin %</th>
                        <th>Margin</th>
                        <th>Sales Price</th>
                        <th>Total Sales Price</th>
                        <th>Discount %</th>
                        <th>Discount</th>
                        <th>Tax%</th>
                        <th>Tax</th>
                        <th>Final Sales Price</th>
                    </tr>
                </thead>

                        {table.map((row,idx) => (
                            <tr>
                                <th><input type='tel' name='quantity' defaultValue={row.quantity} onChange={handleChange}/></th>
                                <th><input type='tel' name='costPrice' defaultValue={row.costPrice} onChange={handleChange}/></th>
                                <th><input type='tel' name='marginPer' defaultValue={row.marginPer} onChange={handleChange}/></th>
                                <th><input type='tel' name='margin' defaultValue={row.margin} onChange={handleChange}/></th>
                                <th><input type='tel' name='salesPrice' defaultValue={row.salesPrice} onChange={handleChange}/></th>
                                <th><input type='tel' name='totalSalesPrice' defaultValue={row.totalSalesPrice} onChange={handleChange}/></th>
                                <th><input type='tel' name='discountPer' defaultValue={row.discountPer} onChange={handleChange}/></th>
                                <th><input type='tel' name='discount' defaultValue={row.discount} onChange={handleChange}/></th>
                                <th><input type='tel' name='taxPer' defaultValue={row.taxPer} onChange={handleChange}/></th>
                                <th><input type='tel' name='tax' defaultValue={row.tax} onChange={handleChange}/></th>
                                <th><input type='tel' name='finalSalesPrice' defaultValue={row.quantity*row.costPrice} onChange={handleChange}/></th>
                            </tr>
                            
                        ))}
              
            </table>
        </div>
    </div>

  )
}

export default Invoice