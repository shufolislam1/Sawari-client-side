import React from 'react';

const Blog = () => {
    return (
        <div className='my-3'>
            <h2>Q1:  Difference between javascript and nodejs ?</h2>
            <p>Ans: javascript is a programmig language which is mostly popular for web development.It can be run in the browser.That means it basically used in client side. javascript used for frontend development. on the other hand, Node js is a javascript runtime environment which allow to run js code in server side.Node js mostly used in server side and it actually used in server side development.</p>

            <h2>Q2: When should you use nodejs and when should you use mongodb ?</h2>
            <p>Ans: MongoDB and NodeJS are two different technologies. MongoDB is a database system which provide you services like storing data or anything related to data.Besides, Node js is a js runtime environment which used in server side.</p>

            <h2>Q3:  Differences between sql and nosql databases ?</h2>
            <p>Ans: SQL databases are primarily called as Relational Databases.SQL databases are best for complex queries and these are Vertically Scalable.On the contrary, NoSQL database are primarily called as non-relational or distributed database. NoSql databases are best suited for hierarchical data storage and these are horizontally Scalable.</p>

            <h2>Q4: What is the purpose of jwt and how does it work ?</h2>
            <p>Ans: Jwt mainly used for security purpose . It secure information between two parties- client and server. Each JWT contains encoded JSON objects, including a set of claims.Each wt has three parts, seperatwd by dots.it actually secure a website very welly and it verify each user by token.</p>
        </div>
    );
};

export default Blog;