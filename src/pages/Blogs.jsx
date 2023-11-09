

const Blogs = () => {
  return (
    <div className=" py-24 mx-6 md:mx-12 lg:mx-24 space-y-10">


    <div className="p-5 space-y-7  shadow-2xl">
        <h1 className="text-3xl font-bold mb-4">- What is Express.js and Nest.js?</h1>
        <p className="text-base font-normal text-gray-800">
            <span className=" text-lg font-bold">Express.js</span> and <span className=" text-lg font-bold">Nest.js</span> are both JavaScript frameworks for building web applications and APIs, but they have different philosophies and use cases.
        </p>
        <h2 className=" text-xl font-bold mt-4">1. Express.js:</h2>
        <p className="text-base font-normal text-gray-800">
           <li>
           <span className=" text-xl font-bold">Express.js</span> is a minimal and flexible web application framework for Node.js. It is one of the most popular and widely used Node.js frameworks. Express.js provides a set of features and tools for building web applications and APIs.
           </li>
           <li>
           It is designed to be unopinionated and minimalist, which means it gives you a basic set of features and leaves many architectural decisions up to the developer. This flexibility allows developers to create custom solutions for their specific needs.
           </li>
           <li>
           Express.js is known for its simplicity, speed, and a large ecosystem of middleware and extensions that can be easily integrated into your application.
           </li>
           <li>
           It is often used for creating RESTful APIs, web applications, and server-side applications.
           </li>
        </p>

        <h2 className=" text-xl font-bold mt-4">2. Nest.js:</h2>
        <p className="text-base font-normal text-gray-800">
           <li>
           <span className=" text-xl font-bold">Nest.js</span> is a full-featured, extensible, and opinionated Node.js framework for building scalable and maintainable server-side applications. It is built on top of Express.js but adds a layer of structure and conventions to help developers build enterprise-grade applications.
           </li>
           <li>
           Nest.js promotes the use of TypeScript, which adds strong typing and modern ECMAScript features to your Node.js applications. It also follows a modular and organized code structure inspired by Angular, making it easy to manage and scale large codebases.
           </li>
           <li>
           It provides a range of built-in features and architectural patterns such as modules, decorators, dependency injection, and middleware. These features make it easier to handle common tasks like routing, validation, authentication, and error handling.
           </li>
        </p>
     
        <p className="text-base font-normal text-gray-800">
            Nest.js is particularly well-suited for building APIs and microservices, and it emphasizes the use of decorators and decorators-based programming.
        </p>

    </div>

      <div className={`flex flex-col  justify-center p-5 space-y-7 shadow-2xl`}>
        <h1 className={`text-3xl font-bold mb-10`}>- What is an access token and refresh token? How do they work and where should we
          store them on the client-side?</h1>
        <h1 className={`text-base leading-6`}>Access tokens and refresh tokens are commonly used in authentication and authorization processes, especially in the context of web applications and APIs. They play a crucial role in ensuring secure access to resources and user data. Here's an overview of what they are, how they work, and where they should be stored on the client-side:
        </h1>
        <h1 className={` text-xl font-bold`}>1. Access Token:</h1>
        <p className={`text-base leading-6`}>
          <li>
            An access token is a short-lived, temporary credential that is granted to a client (e.g., a user or an application) after successful authentication and authorization. It is used to access specific resources or perform actions on behalf of the user.
          </li>
          <li>
            Access tokens typically contain information about the client, user, and the permissions or scopes granted.
          </li>
          <li>
            Access tokens are designed to be short-lived to mitigate security risks. If a token is compromised, the damage is limited because it will expire after a certain period (e.g., minutes or hours).
          </li>
        </p>
        <h2 className={` text-xl font-bold`}>2. Refresh Token:</h2>
        <p className={`text-base leading-6`}>
          <li>
            A refresh token is a long-lived credential used to obtain new access tokens without requiring the user to re-authenticate. It is issued alongside an access token during the initial authorization process.
          </li>
          <li>
            Refresh tokens are used to request a new access token when the old one expires, helping to maintain a continuous user session.
          </li>
          <li>
            They are typically stored securely on the client-side and should not be exposed to unauthorized access.
          </li>
        </p>
        <h2 className={` text-xl font-bold`}>How they work: </h2>
        <h2 className={` text-xl font-bold`}>1. Initial Authentication: </h2>
        <p className={`text-base leading-6`}>
          <li>The access token is used to make authenticated requests to protected resources.
          </li>
          <li>
            When a user logs in or grants permissions to an application, the authorization server issues both an access token and a refresh token.
          </li>
        </p>
        <h2 className={` text-xl font-bold`}>2. Access Token Usage:
        </h2>
        <p className={`text-base leading-6`}>
          <li>
            The resource server (e.g., an API) validates the access token to ensure the client has the necessary permissions to access the requested resource.
          </li>
          <li>
            The client includes the access token in API requests in the "Authorization" header or as a query parameter, depending on the authentication method (e.g., Bearer token).
          </li>
        </p>
        <h2 className={` text-xl font-bold`}>3. Access Token Expiration:  </h2>
        <p className={`text-base leading-6`}>
          <li>
            Access tokens have a short lifespan and will eventually expire. When this happens, the client needs to obtain a new access token.
          </li>        </p>
        <h2 className={` text-xl font-bold`}>4.
          Refresh Token Usage: </h2>
        <p className={`text-base leading-6`}>
          <li>
            The client uses the refresh token to request a new access token from the authorization server when the old access token expires or is revoked.
          </li>
          <li>
            The authorization server verifies the refresh token and, if valid, issues a new access token.
          </li>
        </p>
        <h2 className={` text-xl font-bold`}>Where to store them on the client-side:</h2>
        <h2 className={` text-xl font-bold`}>1. Access Token:</h2>
        <p className={`text-base leading-6`}>
          <li>
            Ensure that access tokens are not exposed to unauthorized scripts, as they can grant access to sensitive resources.
          </li>
          <li>
            Access tokens are sensitive and should be stored securely on the client-side. Common practices for storing access tokens include in-memory storage (e.g., in a variable) or in a secure cookie.
          </li>
        </p>
        <h2 className={` text-xl font-bold`}>2. Refresh Token:</h2>
        <p className={`text-base leading-6`}>
          <li>
            Refresh tokens are even more sensitive because they can be used to obtain new access tokens without the user's involvement. They should be stored securely on the client-side, such as in an HTTP-only secure cookie, or in a secure storage mechanism like a device's secure keychain or a browser's localStorage with additional security measures.
          </li>
        </p>
        <p className={`text-base leading-6`}>
          It's important to follow best security practices and guidelines when handling access and refresh tokens to protect user data and resources from unauthorized access and potential attacks.
        </p>
      </div>

      
    <div className="p-5 space-y-7 shadow-2xl">
        <h1 className="text-3xl font-bold mb-4">- How my job seeking website works</h1>
        <div className="text-base font-normal text-gray-800">
          
            <p className="mb-4">
                In this blog post, I will explain the code for my job seeking website. I will focus on the most important aspects of the code, such as what it does, how it works, and any key design decisions I made.
            </p>
            <p className="mb-4">
                <span className=" text-xl font-bold">What the code does</span>
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Browse and search for jobs</li>
                <li>Apply for jobs</li>
                <li>Post jobs</li>
                <li>Manage their job postings</li>
            </ul>
            <p className="mb-4">
                <span className=" text-xl font-bold">How the code works</span>
            </p>
            <p className="mb-4">
                The code for my job seeking website is divided into two main parts:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>The client-side code: This code is responsible for rendering the user interface and handling user interactions. It is written in React.</li>
                <li>The server-side code: This code is responsible for storing and retrieving data, as well as processing user requests. It is written in Node.js.</li>
            </ul>
            <p className="mb-4">
                The client-side code and server-side code communicate with each other through a REST API.
            </p>
            <p className="mb-4">
                <span className=" text-xl font-bold">Key design decisions</span>
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>I used a modular architecture. This means that the code is divided into smaller, independent modules. This makes the code more reusable and easier to maintain.</li>
                <li>I used a variety of testing frameworks to ensure that the code is working as expected.</li>
                <li>I used a variety of performance optimization techniques to make the website as fast as possible.</li>
            </ul>
            <p className="mb-4">
                <span className=" text-xl font-bold">Conclusion</span>
            </p>
            <p className="mb-4">
                I have tried to explain the code for my job seeking website in a clear and concise way. I hope this has helped you to better understand how the website works.
            </p>
            <p>
                This is just one example of how you can explain your code. The specific content of your blog post will vary depending on the specific code that you are trying to explain. However, the general principles are the same: focus on the most important aspects of the code, and explain them in a way that is clear and understandable to your audience.
            </p>
        </div>
    </div>
    </div>

    


  );
};

export default Blogs;