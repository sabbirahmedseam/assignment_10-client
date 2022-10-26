import React from "react";

const Blog = () => {
  return (
    <div>
      <h2>1.Cors:</h2>Cross-Origin Resource Sharing (CORS) is an HTTP-header
      based mechanism that allows a server to indicate any origins (domain,
      scheme, or port) other than its own from which a browser should permit
      loading resources. CORS also relies on a mechanism by which browsers make
      a "preflight" request to the server hosting the cross-origin resource, in
      order to check that the server will permit the actual request. In that
      preflight, the browser sends headers that indicate the HTTP method and
      headers that will be used in the actual request.
      <h2>2.Using Firebase:</h2>Firebase is easy and more userfriendly than
      others.It's very easy to learn for authentication.
      <p>
        There are more alternatives than using firebase and these are MongoDB.
        Oracle Database. Amazon Redshift. DataStax Enterprise. Redis Enterprise
        Cloud. Cloudera Enterprise Data Hub. Db2. Couchbase Server.
      </p>
      <h2>3.Private Route Work: </h2>The react private route component renders
      child components (children) if the user is logged in. If not logged in the
      user is redirected to the /login page with the return url passed in the
      location state property. The current logged in user (authUser) is
      retrieved from Redux state with a call to the useSelector() hook. Redux is
      used in this example however it is not required to implement a Private
      Route component in React Router 6. You could use a different state
      management library or any approach you prefer to get the logged in status
      of the user.
      <h2>4.Node:</h2>Javascript has existed since 1995 and has since taken over
      as the dominant language for web development. For much of its life,
      JavaScript was used mainly for client-side scripting inside tags executing
      in web browsers. This limitation meant that developers were often working
      in many different languages and frameworks between the front-end
      (client-side) and backend (server-side) aspects of a web application.
      Although there were other projects to bring JavaScript to server-side
      applications, the functionality took off with the launch of Node.js in
      2009. Node allows developers to write JavaScript code that runs directly
      in a computer process itself instead of in a browser. Node can, therefore,
      be used to write server-side applications with access to the operating
      system, file system, and everything else required to build
      fully-functional applications. Node.js is written in C, C++, and
      JavaScript, and it is built on the open-source V8 JavaScript engine which
      also powers JS in browsers such as Google Chrome. As V8 supports new
      features in JavaScript, they are incorporated into Node.
    </div>
  );
};

export default Blog;
