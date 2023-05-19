
const Blog = () => {
    return (
        <div className="m-6">
            <div tabIndex={0} className="collapse w-1/2 mx-auto collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>An access token is a credential that is issued by an authentication server after a user successfully logs in. It is used to authorize and grant access to protected resources or perform certain actions on behalf of the user. The access token typically has an expiration time to enhance security.

                        A refresh token is a longer-lived credential also issued by the authentication server. It is used to obtain a new access token when the current one expires. The refresh token is sent to the server, and if it is valid, a new access token is issued without requiring the user to reauthenticate.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse w-1/2 mx-auto collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>Data Model:

                        SQL (relational) databases have a structured data model where data is organized into tables with predefined schemas and relationships between tables.
                        NoSQL (non-relational) databases have a flexible data model that allows for unstructured or semi-structured data storage. They can be document-based, key-value pairs, columnar, or graph-based.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse w-1/2 mx-auto collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is express js? What is Nest JS?
                </div>
                <div className="collapse-content">
                    <p>Express.js is a popular web application framework for Node.js. It provides a simple and minimalistic approach to building web applications and APIs.

                        NestJS, on the other hand, is a progressive Node.js framework for building scalable and maintainable server-side applications. It is built with TypeScript and incorporates concepts from both Object-Oriented Programming (OOP) and Functional Programming (FP). NestJS follows a modular architecture and uses decorators, similar to Angular, to define controllers, services, and modules.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse w-1/2 mx-auto collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is MongoDB aggregate and how does it work ?
                </div>
                <div className="collapse-content">
                    <p>Mongo DBs aggregation framework is a powerful feature that allows you to perform advanced data analysis and manipulation operations on your data. It provides a way to process and transform data within MongoDB, similar to the capabilities of SQL s GROUP BY and JOIN operations.

The aggregation framework in MongoDB works by using a pipeline approach. A pipeline consists of multiple stages, each stage performing a specific operation on the data and passing the result to the next stage. The output of one stage serves as the input for the next stage.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;