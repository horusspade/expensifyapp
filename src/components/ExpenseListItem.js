import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import numeral from 'numeral';



export const ExpenseListItem = ({ description, amount, createdAt, id,  }) => (

    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h1 className="list-item__title">{description}</h1>
            <span lassName="list-item__sub-title">
                {moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h1 lassName="list-item__data">
            {numeral(amount / 100).format('$0,0.00')}
                </h1>

    </Link>
       
     
      

);

    export default ExpenseListItem;