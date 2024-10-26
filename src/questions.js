export const questions = [
  
    {
      "id": "Q1",
      "question": "A developer is building a serverless application using AWS Lambda and wants to ensure that the application can handle a sudden increase in traffic without losing any data. Which design patterns should the developer implement to achieve fault tolerance?",
      "options": [
        "Use synchronous invocations with retries.",
        "Implement retries with exponential backoff and jitter.",
        "Use stateless Lambda functions with dead-letter queues.",
        "Store state in the Lambda function's /tmp directory.",
        "Increase the Lambda function's timeout value."
      ],
      "correct_answers": [1,2],
      "explanation": "Implementing retries with exponential backoff and jitter helps handle transient errors and reduces the load on downstream systems. Using stateless Lambda functions with dead-letter queues allows messages that fail to process to be captured for later analysis or reprocessing.",
      "question_type": "multiple-response"
    },
    {
      "id": "Q2",
      "question": "An application requires a relational database that can scale automatically with minimal operational overhead. The database must be able to handle unpredictable workloads. Which AWS service should the developer use?",
      "options": [
        "Amazon RDS for MySQL",
        "Amazon DynamoDB",
        "Amazon Aurora Serverless",
        "Amazon Redshift",
        "Amazon ElastiCache for Redis"
      ],
      "correct_answers": [2],
      "explanation": "Amazon Aurora Serverless is a relational database that automatically scales capacity based on workload demands, reducing operational overhead and handling unpredictable workloads efficiently.",
      "question_type": "single-choice"
    },
    {
      "id": "Q3",
      "question": "A developer is designing an application that requires high read and write throughput with low latency. The data model is non-relational and the application needs to scale globally. Which AWS service is most appropriate for this use case?",
      "options": [
        "Amazon RDS for PostgreSQL",
        "Amazon DynamoDB with Global Tables",
        "Amazon Aurora Global Database",
        "Amazon S3 with Cross-Region Replication",
        "Amazon ElastiCache for Memcached"
      ],
      "correct_answers": [1],
      "explanation": "Amazon DynamoDB with Global Tables provides a fully managed, multi-region, multi-master database that can scale globally with low latency and high throughput for non-relational data models.",
      "question_type": "single-choice"
    },
    {
      "id": "Q4",
      "question": "A developer needs to securely store API keys and database credentials for an application running on Amazon EC2 instances. The credentials must be encrypted at rest and automatically rotated. Which AWS service should the developer use to meet these requirements?",
      "options": [
        "Store credentials in encrypted EBS volumes attached to the instances.",
        "Use AWS Secrets Manager to store and rotate the credentials.",
        "Save the credentials in a private S3 bucket with server-side encryption.",
        "Embed the credentials in the application code.",
        "Use AWS KMS to generate data keys and store credentials in plaintext."
      ],
      "correct_answers": [1],
      "explanation": "AWS Secrets Manager allows you to store, retrieve, and automatically rotate database credentials, API keys, and other secrets through integration with AWS KMS for encryption at rest.",
      "question_type": "single-choice"
    },
    {
      "id": "Q5",
      "question": "An application deployed on AWS needs to perform real-time processing of streaming data from multiple sources. The data must be ingested, processed, and analyzed with minimal latency. Which AWS service should the developer use to build this solution?",
      "options": [
        "Amazon Kinesis Data Streams",
        "Amazon SQS",
        "Amazon SNS",
        "AWS Batch",
        "Amazon EMR"
      ],
      "correct_answers": [0],
      "explanation": "Amazon Kinesis Data Streams is designed for real-time data streaming, allowing applications to process and analyze data with low latency.",
      "question_type": "single-choice"
    },
    {
      "id": "Q6",
      "question": "A developer needs to integrate an application with AWS services by using APIs. Which is the most secure way to provide programmatic access to AWS resources?",
      "options": [
        "Embed AWS credentials directly in the application code.",
        "Use IAM roles and instance profiles for EC2 instances.",
        "Store AWS credentials in environment variables.",
        "Save AWS credentials in a configuration file on the instance.",
        "Use a shared IAM user for all applications."
      ],
      "correct_answers": [1],
      "explanation": "Using IAM roles and instance profiles allows applications running on EC2 instances to obtain temporary security credentials securely without hardcoding credentials.",
      "question_type": "single-choice"
    },
    {
      "id": "Q7",
      "question": "A developer is building a microservices-based application that requires orchestration to manage complex transactions between services. Which architectural pattern should the developer use to coordinate the microservices?",
      "options": [
        "Event-driven architecture",
        "Monolithic architecture",
        "Orchestration-based saga pattern",
        "Choreography-based saga pattern",
        "Tightly coupled components"
      ],
      "correct_answers": [2],
      "explanation": "The orchestration-based saga pattern coordinates transactions across microservices using a central orchestrator, suitable for managing complex transactions.",
      "question_type": "single-choice"
    },
    {
      "id": "Q8",
      "question": "An application running on AWS Lambda needs to access resources inside a private VPC. What must the developer configure to allow the Lambda function to access the private resources?",
      "options": [
        "Configure the Lambda function to run inside the VPC with appropriate subnet and security group settings.",
        "Use AWS Direct Connect to link the Lambda function to the VPC.",
        "Deploy the Lambda function in a public subnet.",
        "Assign an Elastic IP address to the Lambda function.",
        "Configure NAT Gateway for outbound internet traffic."
      ],
      "correct_answers": [0],
      "explanation": "To access private resources in a VPC, the Lambda function must be configured to run inside the VPC by specifying the VPC, subnet, and security group settings.",
      "question_type": "single-choice"
    },
    {
      "id": "Q9",
      "question": "A developer is using AWS X-Ray to trace an application. The traces show high latency in one of the microservices. Which AWS service can the developer use to visualize and identify the latency issues in the service map?",
      "options": [
        "Amazon CloudWatch Logs",
        "AWS X-Ray Analytics",
        "AWS CloudTrail",
        "Amazon Athena",
        "AWS Config"
      ],
      "correct_answers": [1],
      "explanation": "AWS X-Ray Analytics provides visualization tools like service maps that help identify latency issues and performance bottlenecks in microservices applications.",
      "question_type": "single-choice"
    },
    {
      "id": "Q10",
      "question": "A developer needs to send messages between decoupled components of a distributed application, ensuring that each message is processed only once and in the exact order they are sent. Which AWS service should the developer use?",
      "options": [
        "Amazon SNS",
        "Amazon SQS Standard Queue",
        "Amazon MQ",
        "Amazon SQS FIFO Queue",
        "AWS Step Functions"
      ],
      "correct_answers": [3],
      "explanation": "Amazon SQS FIFO queues ensure that messages are processed exactly once and in the exact order they are sent, suitable for tasks that require strict ordering and exactly-once processing.",
      "question_type": "single-choice"
    },
    {
      "id": "Q11",
      "question": "A developer is deploying a new version of an application using AWS CodeDeploy and wants to ensure that if there are any issues, the deployment can quickly roll back to the previous stable version without downtime. Which deployment strategy should the developer choose?",
      "options": [
        "In-place deployment",
        "Blue/green deployment",
        "Rolling deployment",
        "Canary deployment",
        "All-at-once deployment"
      ],
      "correct_answers": [1],
      "explanation": "Blue/green deployment allows you to run two identical environments (blue and green). Traffic is shifted from blue to green, and if issues occur, traffic can be quickly shifted back, enabling quick rollback without downtime.",
      "question_type": "single-choice"
    },
    {
      "id": "Q12",
      "question": "A developer needs to deploy a serverless application and wants to define the AWS resources in a template that can be version-controlled and reused. Which AWS service or tool should the developer use?",
      "options": [
        "AWS CloudFormation",
        "AWS CodeCommit",
        "AWS CodeDeploy",
        "AWS Elastic Beanstalk",
        "AWS Cloud9"
      ],
      "correct_answers": [0],
      "explanation": "AWS CloudFormation allows developers to define infrastructure as code using templates, which can be version-controlled and reused for consistent deployments.",
      "question_type": "single-choice"
    },
    {
      "id": "Q13",
      "question": "An application uses Amazon S3 to store data. The developer wants to minimize costs by moving infrequently accessed data to a different storage class while ensuring that the data is still immediately accessible when needed. Which S3 storage class should the developer choose?",
      "options": [
        "S3 Standard",
        "S3 Standard-Infrequent Access (S3 Standard-IA)",
        "S3 One Zone-Infrequent Access (S3 One Zone-IA)",
        "S3 Glacier Instant Retrieval",
        "S3 Glacier Deep Archive"
      ],
      "correct_answers": [1],
      "explanation": "S3 Standard-IA offers lower storage costs for infrequently accessed data while still providing high availability and immediate access when needed.",
      "question_type": "single-choice"
    },
    {
      "id": "Q14",
      "question": "A developer needs to use AWS services to manage application configuration data that can be changed dynamically without redeploying the application. Which AWS services should the developer use?",
      "options": [
        "AWS Secrets Manager",
        "AWS AppConfig",
        "AWS Systems Manager Parameter Store",
        "Amazon DynamoDB",
        "AWS Config"
      ],
      "correct_answers": [1,2],
      "explanation": "AWS AppConfig and AWS Systems Manager Parameter Store both allow developers to manage application configuration data that can be changed dynamically without redeploying the application.",
      "question_type": "multiple-response"
    },
    {
      "id": "Q15",
      "question": "A developer is writing code to handle exceptions when interacting with AWS services using the AWS SDK. Which best practice should the developer follow to ensure proper error handling?",
      "options": [
        "Retry all exceptions indefinitely until the request succeeds.",
        "Catch generic exceptions and log the error messages.",
        "Implement retries with exponential backoff for retryable exceptions.",
        "Ignore exceptions and assume eventual consistency.",
        "Terminate the application upon encountering an exception."
      ],
      "correct_answers": [2],
      "explanation": "Implementing retries with exponential backoff for retryable exceptions is a best practice for handling transient errors when interacting with AWS services.",
      "question_type": "single-choice"
    },
    {
      "id": "Q16",
      "question": "A developer needs to authenticate users to access an application using social identity providers like Facebook and Google. Which AWS service simplifies this process?",
      "options": [
        "AWS IAM",
        "Amazon Cognito",
        "AWS Single Sign-On",
        "AWS Directory Service",
        "AWS STS"
      ],
      "correct_answers": [1],
      "explanation": "Amazon Cognito provides user sign-up, sign-in, and access control, and can integrate with social identity providers for authentication.",
      "question_type": "single-choice"
    },
    {
      "id": "Q17",
      "question": "An application needs to securely encrypt data in transit using SSL/TLS certificates. Which AWS service can provide and manage these certificates for use with AWS services like Elastic Load Balancing and Amazon CloudFront?",
      "options": [
        "AWS KMS",
        "AWS Certificate Manager",
        "AWS Secrets Manager",
        "AWS Shield",
        "AWS WAF"
      ],
      "correct_answers": [1],
      "explanation": "AWS Certificate Manager (ACM) handles the provisioning, deployment, and management of SSL/TLS certificates for use with AWS services.",
      "question_type": "single-choice"
    },
    {
      "id": "Q18",
      "question": "A developer wants to cache frequently accessed data to improve application performance. Which AWS service can be used to implement an in-memory data store and cache?",
      "options": [
        "Amazon RDS",
        "Amazon Redshift",
        "Amazon ElastiCache",
        "Amazon DynamoDB Accelerator (DAX)",
        "Amazon S3"
      ],
      "correct_answers": [2,3],
      "explanation": "Amazon ElastiCache provides in-memory data stores compatible with Redis or Memcached. DynamoDB Accelerator (DAX) is a caching service specifically for DynamoDB.",
      "question_type": "multiple-response"
    },
    {
      "id": "Q19",
      "question": "A developer needs to perform canary deployments for a Lambda function to test new code with a small percentage of users before a full rollout. Which AWS service or feature supports this deployment strategy?",
      "options": [
        "AWS CodeDeploy",
        "AWS CodePipeline",
        "AWS Elastic Beanstalk",
        "Lambda Aliases with Traffic Shifting",
        "AWS CloudFormation"
      ],
      "correct_answers": [0,3],
      "explanation": "AWS CodeDeploy can perform canary deployments for Lambda functions. Lambda aliases with traffic shifting also support canary deployments by routing a percentage of traffic to new code versions.",
      "question_type": "multiple-response"
    },
    {
      "id": "Q20",
      "question": "A developer is using Amazon API Gateway to expose a REST API. The API needs to transform incoming request data before passing it to the backend Lambda function. Which feature should the developer use?",
      "options": [
        "API Gateway Usage Plans",
        "API Gateway Stage Variables",
        "API Gateway Mapping Templates",
        "API Gateway Resource Policies",
        "API Gateway Caching"
      ],
      "correct_answers": [2],
      "explanation": "API Gateway Mapping Templates allow developers to transform request and response payloads using velocity templates before passing data to the backend.",
      "question_type": "single-choice"
    },
    {
      "id": "Q21",
      "question": "An application requires read-heavy access to a DynamoDB table. To improve performance, the developer wants to cache the results of read queries. Which AWS service should the developer use?",
      "options": [
        "Amazon ElastiCache for Redis",
        "Amazon SQS",
        "Amazon DynamoDB Accelerator (DAX)",
        "AWS Lambda",
        "Amazon Kinesis Data Streams"
      ],
      "correct_answers": [2],
      "explanation": "Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x read performance improvement.",
      "question_type": "single-choice"
    },
    {
      "id": "Q22",
      "question": "A developer needs to perform real-time analytics on streaming data and respond to events within seconds. Which AWS service should the developer use?",
      "options": [
        "Amazon Kinesis Data Analytics",
        "Amazon EMR",
        "AWS Glue",
        "Amazon QuickSight",
        "AWS Batch"
      ],
      "correct_answers": [0],
      "explanation": "Amazon Kinesis Data Analytics allows developers to process and analyze streaming data in real time using SQL or Apache Flink.",
      "question_type": "single-choice"
    },
    {
      "id": "Q23",
      "question": "An application requires users to upload files directly to Amazon S3 from their browsers without exposing AWS credentials. Which method should the developer implement?",
      "options": [
        "Use AWS SDK to upload files directly.",
        "Create a pre-signed URL for S3 and provide it to users.",
        "Have users upload files to an EC2 instance that then uploads to S3.",
        "Embed AWS credentials in the client-side application.",
        "Use Amazon S3 Transfer Acceleration."
      ],
      "correct_answers": [1],
      "explanation": "Creating a pre-signed URL allows users to upload files directly to S3 without exposing AWS credentials, and the URL can be set to expire after a certain time.",
      "question_type": "single-choice"
    },
    {
      "id": "Q24",
      "question": "A developer needs to monitor the performance of a Lambda function and set up an alert if the function's duration exceeds a certain threshold. Which AWS service should the developer use?",
      "options": [
        "AWS CloudTrail",
        "Amazon CloudWatch",
        "AWS X-Ray",
        "AWS Config",
        "AWS Trusted Advisor"
      ],
      "correct_answers": [1],
      "explanation": "Amazon CloudWatch provides metrics for Lambda functions, including duration, and allows setting up alarms based on metric thresholds.",
      "question_type": "single-choice"
    },
    {
      "id": "Q25",
      "question": "A developer wants to use environment variables to store configuration settings and sensitive data for an AWS Lambda function. What is the best practice for securing sensitive data in environment variables?",
      "options": [
        "Encrypt the environment variables using AWS KMS.",
        "Store the sensitive data in plaintext in the environment variables.",
        "Use a third-party encryption library to encrypt the data.",
        "Hardcode the sensitive data in the Lambda function code.",
        "Store the sensitive data in an S3 bucket without encryption."
      ],
      "correct_answers": [0],
      "explanation": "Encrypting environment variables using AWS KMS ensures that sensitive data is secured and only accessible by authorized users or services.",
      "question_type": "single-choice"
    },
    {
      "id": "Q26",
      "question": "A developer needs to set up continuous integration and continuous delivery (CI/CD) for an application hosted on AWS. Which combination of AWS services can be used to build this pipeline?",
      "options": [
        "AWS CodeCommit, AWS CodeBuild, AWS CodeDeploy, AWS CodePipeline",
        "Amazon S3, AWS Lambda, AWS CloudFormation, AWS CloudTrail",
        "AWS CodeStar, AWS X-Ray, AWS Cloud9, AWS CloudFront",
        "AWS CodeGuru, Amazon ECR, AWS Batch, AWS Glue",
        "AWS CodeArtifact, AWS Amplify, AWS Step Functions, Amazon MQ"
      ],
      "correct_answers": [0],
      "explanation": "AWS CodeCommit (source control), AWS CodeBuild (build service), AWS CodeDeploy (deployment service), and AWS CodePipeline (pipeline orchestration) can be combined to create a CI/CD pipeline.",
      "question_type": "single-choice"
    },
    {
      "id": "Q27",
      "question": "An application running on AWS needs to send email notifications to users. Which AWS service should the developer use to send emails programmatically?",
      "options": [
        "Amazon SES",
        "Amazon SNS",
        "Amazon SQS",
        "AWS Step Functions",
        "AWS Chime"
      ],
      "correct_answers": [0],
      "explanation": "Amazon Simple Email Service (SES) allows developers to send emails programmatically at scale.",
      "question_type": "single-choice"
    },
    {
      "id": "Q28",
      "question": "A developer is implementing federated access to allow users to log in using their corporate credentials via SAML. Which AWS service enables this functionality?",
      "options": [
        "AWS IAM",
        "AWS STS",
        "Amazon Cognito",
        "AWS Directory Service",
        "AWS Single Sign-On"
      ],
      "correct_answers": [4],
      "explanation": "AWS Single Sign-On (SSO) enables federated access using SAML for users to log in with corporate credentials.",
      "question_type": "single-choice"
    },
    {
      "id": "Q29",
      "question": "A developer wants to optimize the performance of a Lambda function by minimizing its cold start time. Which of the following should the developer consider?",
      "options": [
        "Increase the memory allocation for the Lambda function.",
        "Use a compiled language runtime like Go or .NET Core.",
        "Enable Lambda function versioning.",
        "Package the function with all dependencies, including unused ones.",
        "Set up a CloudWatch Events rule to trigger the function periodically."
      ],
      "correct_answers": [0,1,4],
      "explanation": "Increasing memory allocation can reduce startup time. Using compiled languages can lead to faster cold starts. Triggering the function periodically keeps it warm, reducing cold starts.",
      "question_type": "multiple-response"
    },
    {
      "id": "Q30",
      "question": "A developer needs to enforce SSL/TLS for an application behind an Application Load Balancer (ALB). Which AWS service provides managed SSL/TLS certificates that can be integrated with the ALB?",
      "options": [
        "AWS KMS",
        "AWS Certificate Manager",
        "AWS Secrets Manager",
        "AWS Shield",
        "Amazon GuardDuty"
      ],
      "correct_answers": [1],
      "explanation": "AWS Certificate Manager provides managed SSL/TLS certificates that can be deployed on AWS services like ALBs.",
      "question_type": "single-choice"
    },
    {
      "id": "Q31",
      "question": "A developer needs to debug and trace data across distributed microservices. Which AWS service should the developer use to gain insights into the application's performance and identify bottlenecks?",
      "options": [
        "AWS CloudTrail",
        "Amazon CloudWatch",
        "AWS X-Ray",
        "AWS Config",
        "AWS Trusted Advisor"
      ],
      "correct_answers": [2],
      "explanation": "AWS X-Ray helps developers analyze and debug distributed applications, providing end-to-end tracing capabilities.",
      "question_type": "single-choice"
    },
    {
      "id": "Q32",
      "question": "An application running on EC2 instances needs to access objects in an S3 bucket. According to best practices, how should the developer configure access?",
      "options": [
        "Embed AWS credentials in the application code.",
        "Assign an IAM role to the EC2 instances with permissions to access the S3 bucket.",
        "Store AWS credentials in a configuration file on the EC2 instances.",
        "Use S3 pre-signed URLs for each object access.",
        "Manually provide AWS credentials to the application at runtime."
      ],
      "correct_answers": [1],
      "explanation": "Assigning an IAM role to EC2 instances allows the application to access AWS resources securely without embedding credentials.",
      "question_type": "single-choice"
    },
    {
      "id": "Q33",
      "question": "A developer is creating a RESTful API using Amazon API Gateway and AWS Lambda. The API needs to handle authentication and authorization. Which feature of API Gateway can be used to manage access control?",
      "options": [
        "API Gateway Resource Policies",
        "API Gateway Usage Plans",
        "API Gateway Lambda Authorizers",
        "API Gateway Integration Responses",
        "API Gateway CORS Configuration"
      ],
      "correct_answers": [2],
      "explanation": "API Gateway Lambda Authorizers (formerly known as Custom Authorizers) allow developers to use Lambda functions to control access to APIs by implementing authentication and authorization logic.",
      "question_type": "single-choice"
    },
    {
      "id": "Q34",
      "question": "An application needs to store session data for users across multiple EC2 instances in a scalable and highly available manner. Which AWS service should the developer use?",
      "options": [
        "Amazon RDS",
        "Amazon ElastiCache for Redis",
        "Amazon DynamoDB",
        "Amazon S3",
        "AWS Secrets Manager"
      ],
      "correct_answers": [1,2],
      "explanation": "Both Amazon ElastiCache for Redis and Amazon DynamoDB are suitable for storing session data in a scalable and highly available manner.",
      "question_type": "multiple-response"
    },
    {
      "id": "Q35",
      "question": "A developer needs to automate the deployment of infrastructure and application code in a repeatable manner. Which AWS service or tool should the developer use to define and provision the infrastructure?",
      "options": [
        "AWS CodePipeline",
        "AWS Elastic Beanstalk",
        "AWS CloudFormation",
        "AWS CodeCommit",
        "AWS OpsWorks"
      ],
      "correct_answers": [2],
      "explanation": "AWS CloudFormation allows developers to define and provision infrastructure and application code using templates, enabling repeatable deployments.",
      "question_type": "single-choice"
    },
    {
      "id": "Q36",
      "question": "A developer is setting up monitoring for an application and wants to create custom metrics. Which AWS service allows the developer to publish and monitor custom application metrics?",
      "options": [
        "Amazon CloudWatch",
        "AWS X-Ray",
        "AWS CloudTrail",
        "AWS Config",
        "Amazon QuickSight"
      ],
      "correct_answers": [0],
      "explanation": "Amazon CloudWatch allows developers to publish custom metrics and set up alarms for monitoring applications.",
      "question_type": "single-choice"
    },
    {
      "id": "Q37",
      "question": "An application uses AWS Lambda functions invoked by Amazon S3 events. The developer needs to test the Lambda function locally with sample event data. Which tool can be used to accomplish this?",
      "options": [
        "AWS CodeDeploy",
        "AWS SAM CLI",
        "AWS CloudFormation",
        "AWS Elastic Beanstalk CLI",
        "AWS CodeBuild"
      ],
      "correct_answers": [1],
      "explanation": "The AWS Serverless Application Model (SAM) CLI allows developers to locally build, test, and debug serverless applications including Lambda functions.",
      "question_type": "single-choice"
    },
    {
      "id": "Q38",
      "question": "A developer needs to implement messaging between microservices with the ability to filter messages based on certain criteria. Which AWS service should be used?",
      "options": [
        "Amazon SQS Standard Queue",
        "Amazon SNS with Message Filtering",
        "Amazon MQ",
        "Amazon EventBridge",
        "AWS Step Functions"
      ],
      "correct_answers": [1,3],
      "explanation": "Both Amazon SNS with Message Filtering and Amazon EventBridge allow for message filtering based on attributes or patterns.",
      "question_type": "multiple-response"
    },
    {
      "id": "Q39",
      "question": "A developer needs to run a Docker container in a serverless fashion without managing servers. Which AWS service should the developer use?",
      "options": [
        "Amazon EC2 with Docker",
        "Amazon ECS with EC2 Launch Type",
        "AWS Fargate",
        "AWS Lambda Layers",
        "Amazon EKS"
      ],
      "correct_answers": [2],
      "explanation": "AWS Fargate allows developers to run containers without managing servers or clusters, providing a serverless compute engine for containers.",
      "question_type": "single-choice"
    },
    {
      "id": "Q40",
      "question": "A developer wants to ensure that code changes are peer-reviewed before being merged into the main branch. Which AWS service can facilitate this code review process?",
      "options": [
        "AWS CodeBuild",
        "AWS CodeCommit",
        "AWS CodeDeploy",
        "AWS CodePipeline",
        "AWS CodeGuru Reviewer"
      ],
      "correct_answers": [1,4],
      "explanation": "AWS CodeCommit supports pull requests for code reviews, and AWS CodeGuru Reviewer provides automated code reviews with recommendations.",
      "question_type": "multiple-response"
    },
    {
      "id": "Q41",
      "question": "A developer needs to analyze application logs stored in Amazon S3 using standard SQL queries. Which AWS service should the developer use?",
      "options": [
        "Amazon Athena",
        "Amazon Redshift",
        "Amazon EMR",
        "AWS Glue",
        "Amazon Kinesis Data Analytics"
      ],
      "correct_answers": [0],
      "explanation": "Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL.",
      "question_type": "single-choice"
    },
    {
      "id": "Q42",
      "question": "An application requires the use of WebSockets to provide real-time two-way communication between clients and servers. Which AWS service supports this requirement?",
      "options": [
        "Amazon API Gateway",
        "AWS AppSync",
        "Amazon SQS",
        "Amazon SNS",
        "AWS Lambda"
      ],
      "correct_answers": [0,1],
      "explanation": "Both Amazon API Gateway and AWS AppSync support WebSocket connections for real-time communication.",
      "question_type": "multiple-response"
    },
    {
      "id": "Q43",
      "question": "A developer wants to manage multiple versions of a Lambda function and route traffic between them. Which AWS feature allows the developer to do this?",
      "options": [
        "Lambda Layers",
        "Lambda Aliases",
        "Lambda Destinations",
        "Lambda Edge",
        "Lambda Extensions"
      ],
      "correct_answers": [1],
      "explanation": "Lambda Aliases allow developers to create pointers to specific Lambda function versions and enable traffic shifting between versions.",
      "question_type": "single-choice"
    },
    {
      "id": "Q44",
      "question": "An application needs to read messages from an Amazon SQS queue and process them. The developer wants to ensure that messages are not lost if the processing fails. What should the developer implement?",
      "options": [
        "Enable long polling on the SQS queue.",
        "Set up a dead-letter queue for the SQS queue.",
        "Increase the visibility timeout of the SQS queue.",
        "Use Amazon SNS instead of Amazon SQS.",
        "Delete messages immediately after reading them."
      ],
      "correct_answers": [1],
      "explanation": "Setting up a dead-letter queue allows messages that fail processing to be captured for later analysis or reprocessing, preventing message loss.",
      "question_type": "single-choice"
    },
    {
      "id": "Q45",
      "question": "A developer needs to enforce fine-grained permissions for users accessing an application that uses Amazon DynamoDB. Which AWS service or feature should be used?",
      "options": [
        "AWS IAM policies attached to the DynamoDB table",
        "DynamoDB Access Control Lists (ACLs)",
        "IAM roles with inline policies",
        "IAM policies with condition keys specific to DynamoDB",
        "Amazon Cognito Identity Pools with role-based access"
      ],
      "correct_answers": [3,4],
      "explanation": "IAM policies with DynamoDB-specific condition keys and Amazon Cognito Identity Pools can enforce fine-grained access control for users.",
      "question_type": "multiple-response"
    },
    {
      "id": "Q46",
      "question": "An application requires scheduled tasks to be run at regular intervals. Which AWS service allows the developer to set up these scheduled events?",
      "options": [
        "Amazon CloudWatch Events (EventBridge)",
        "AWS Step Functions",
        "AWS Batch",
        "AWS Lambda with scheduled triggers",
        "AWS Data Pipeline"
      ],
      "correct_answers": [0,3],
      "explanation": "Amazon EventBridge (CloudWatch Events) can trigger scheduled events, and AWS Lambda can be set up with scheduled triggers to run tasks at regular intervals.",
      "question_type": "multiple-response"
    },
    {
      "id": "Q47",
      "question": "A developer needs to create a custom domain name for an API hosted on Amazon API Gateway. Which AWS service should be used to manage the DNS records for the custom domain?",
      "options": [
        "Amazon Route 53",
        "AWS Certificate Manager",
        "AWS CloudFormation",
        "AWS Config",
        "AWS Directory Service"
      ],
      "correct_answers": [0],
      "explanation": "Amazon Route 53 is a DNS web service that can manage DNS records for custom domain names.",
      "question_type": "single-choice"
    },
    {
      "id": "Q48",
      "question": "An application running in AWS needs to generate reports by querying data stored in Amazon RDS. The queries are complex and impact the performance of the primary database. What is the recommended solution?",
      "options": [
        "Increase the instance size of the RDS database.",
        "Enable Multi-AZ deployment for the RDS database.",
        "Create read replicas and direct reporting queries to them.",
        "Use Amazon DynamoDB for reporting.",
        "Set up Amazon ElastiCache in front of the RDS database."
      ],
      "correct_answers": [2],
      "explanation": "Creating read replicas allows the offloading of read-heavy workloads like reporting, reducing the impact on the primary database.",
      "question_type": "single-choice"
    },
    {
      "id": "Q49",
      "question": "A developer wants to automate the deployment of code changes to an AWS Lambda function whenever there is a new commit in the CodeCommit repository. Which AWS services can be used to set up this automation?",
      "options": [
        "AWS CodePipeline",
        "AWS CodeBuild",
        "AWS CodeDeploy",
        "AWS CloudFormation",
        "AWS Elastic Beanstalk"
      ],
      "correct_answers": [0,2],
      "explanation": "AWS CodePipeline can orchestrate the workflow, and AWS CodeDeploy can deploy the Lambda function code automatically upon code changes.",
      "question_type": "multiple-response"
    },
    {
      "id": "Q50",
      "question": "A developer needs to store large files that can be accessed over the internet with low latency and high throughput. The files should also be cached at edge locations globally. Which AWS solution should be used?",
      "options": [
        "Store files in Amazon S3 and use Amazon CloudFront as a CDN.",
        "Use Amazon EFS and mount it to EC2 instances.",
        "Store files in Amazon RDS and enable read replicas.",
        "Use Amazon Glacier for storage and retrieval.",
        "Store files on EC2 instance store volumes."
      ],
      "correct_answers": [0],
      "explanation": "Storing files in Amazon S3 and using Amazon CloudFront as a CDN provides low latency and high throughput access globally by caching content at edge locations.",
      "question_type": "single-choice"
    }
    ,
      {
        "id": "Q51",
        "question": "A startup company is developing a real-time ride-sharing application that must process and match ride requests instantly. The application needs to handle millions of concurrent users globally with minimal latency. Which combination of AWS services should the developer use to meet these requirements?",
        "options": [
          "Amazon RDS with Multi-AZ deployment",
          "Amazon DynamoDB with Global Tables",
          "Amazon SQS Standard Queue",
          "Amazon ElastiCache for Redis",
          "AWS Lambda with AWS Step Functions"
        ],
        "correct_answers": [1, 3],
        "explanation": "Amazon DynamoDB with Global Tables provides a NoSQL database with global replication and low latency. Amazon ElastiCache for Redis offers in-memory data storage for caching and real-time processing, suitable for high-performance applications like ride-sharing.",
        "question_type": "multiple-response"
      },
      {
        "id": "Q52",
        "question": "An e-commerce company wants to personalize product recommendations for its users in real-time based on their browsing history. The solution should be scalable, require minimal management, and integrate machine learning capabilities. Which AWS service should the developer choose?",
        "options": [
          "Amazon SageMaker",
          "Amazon Personalize",
          "AWS Lambda",
          "Amazon Kinesis Data Streams",
          "Amazon Rekognition"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Personalize is a machine learning service that makes it easy for developers to create individualized recommendations for users of their applications, requiring no prior machine learning experience.",
        "question_type": "single-choice"
      },
      {
        "id": "Q53",
        "question": "A media company needs to transcode a large number of video files uploaded by users. The processing should scale automatically based on the workload and minimize costs when not in use. Which AWS service combination should be used to build this solution?",
        "options": [
          "Amazon EC2 Auto Scaling with Spot Instances",
          "AWS Lambda with S3 triggers",
          "AWS Fargate with Amazon ECS",
          "AWS Batch with Amazon S3",
          "Amazon Elastic Transcoder"
        ],
        "correct_answers": [3, 4],
        "explanation": "AWS Batch enables developers to run batch computing workloads and dynamically provisions the optimal quantity and type of compute resources. Amazon Elastic Transcoder is a media transcoding service in the cloud. Both services can scale automatically and are cost-effective.",
        "question_type": "multiple-response"
      },
      {
        "id": "Q54",
        "question": "A financial services company needs to process transactions with high availability and strict consistency requirements. The data must be stored in a relational database that can handle failover automatically without data loss. Which AWS database solution should the developer implement?",
        "options": [
          "Amazon Aurora with Multi-AZ deployments",
          "Amazon DynamoDB",
          "Amazon RDS for MySQL Single-AZ",
          "Amazon Redshift",
          "Amazon Neptune"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Aurora with Multi-AZ deployments provides a highly available relational database with automated failover and ensures data is synchronously replicated to a standby instance, meeting strict consistency requirements.",
        "question_type": "single-choice"
      },
      {
        "id": "Q55",
        "question": "An IoT company needs to collect, process, and analyze streaming data from millions of devices globally. The data should be processed in real-time to trigger alerts and stored for long-term analytics. Which combination of AWS services should the developer use?",
        "options": [
          "Amazon Kinesis Data Streams and Amazon S3",
          "AWS IoT Core and AWS Lambda",
          "Amazon SQS and Amazon RDS",
          "Amazon SNS and Amazon DynamoDB",
          "AWS Glue and Amazon Redshift"
        ],
        "correct_answers": [0, 1],
        "explanation": "Amazon Kinesis Data Streams can collect and process large streams of data records in real time. AWS IoT Core allows secure, bi-directional communication between devices and AWS. AWS Lambda can process the data, and Amazon S3 can store the data for long-term analytics.",
        "question_type": "multiple-response"
      },
      {
        "id": "Q56",
        "question": "A global news agency wants to distribute content efficiently to users worldwide, ensuring fast page loads and minimal latency. The content includes both static assets and dynamic content. Which AWS service should the developer use to achieve this?",
        "options": [
          "Amazon S3 with Transfer Acceleration",
          "Amazon CloudFront with Lambda@Edge",
          "Amazon RDS with Read Replicas",
          "AWS Global Accelerator",
          "Amazon API Gateway with caching"
        ],
        "correct_answers": [1],
        "explanation": "Amazon CloudFront is a global Content Delivery Network (CDN) that can deliver both static and dynamic content using edge locations. Lambda@Edge allows for the execution of code closer to users, reducing latency for dynamic content.",
        "question_type": "single-choice"
      },
      {
        "id": "Q57",
        "question": "A company needs to migrate its on-premises monolithic application to AWS. They want to refactor it into microservices to improve scalability and maintainability. The application requires orchestration to manage complex transactions. Which AWS service should the developer use to coordinate the microservices?",
        "options": [
          "Amazon SQS",
          "AWS Step Functions",
          "AWS Lambda",
          "Amazon ECS",
          "AWS AppSync"
        ],
        "correct_answers": [1],
        "explanation": "AWS Step Functions is a serverless function orchestrator that makes it easy to sequence AWS Lambda functions and multiple AWS services into business-critical applications. It is suitable for coordinating microservices.",
        "question_type": "single-choice"
      },
      {
        "id": "Q58",
        "question": "An online gaming company needs a high-performance database solution for storing session state and player data. The solution must provide sub-millisecond latency and high throughput. Which AWS service should the developer choose?",
        "options": [
          "Amazon RDS for PostgreSQL",
          "Amazon DynamoDB",
          "Amazon Aurora",
          "Amazon ElastiCache for Redis",
          "Amazon Neptune"
        ],
        "correct_answers": [3],
        "explanation": "Amazon ElastiCache for Redis is an in-memory data store that provides sub-millisecond latency and high throughput, making it ideal for real-time applications like online gaming.",
        "question_type": "single-choice"
      },
      {
        "id": "Q59",
        "question": "A healthcare application needs to store and retrieve sensitive patient data. The data must be encrypted at rest and in transit, and the solution must comply with HIPAA regulations. Which combination of AWS services should the developer use?",
        "options": [
          "Amazon S3 with default encryption and SSL/TLS",
          "Amazon DynamoDB with server-side encryption",
          "AWS Key Management Service (KMS) and AWS Certificate Manager (ACM)",
          "Amazon RDS with Transparent Data Encryption (TDE)",
          "AWS CloudHSM and Amazon EC2"
        ],
        "correct_answers": [2, 3],
        "explanation": "AWS KMS can manage encryption keys for data at rest, and ACM provides SSL/TLS certificates for data in transit. Amazon RDS with TDE encrypts data at rest and can use SSL/TLS for encryption in transit, meeting HIPAA compliance requirements.",
        "question_type": "multiple-response"
      },
      {
        "id": "Q60",
        "question": "A retail company wants to implement a chatbot to handle customer inquiries on their website. The chatbot should use natural language understanding to interact with customers. Which AWS service should the developer use to build this solution?",
        "options": [
          "Amazon Lex",
          "Amazon Polly",
          "Amazon Comprehend",
          "Amazon Transcribe",
          "AWS Chatbot"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Lex is a service for building conversational interfaces into applications using voice and text, providing natural language understanding capabilities.",
        "question_type": "single-choice"
      },
      {
        "id": "Q61",
        "question": "An enterprise wants to securely integrate its on-premises Active Directory with AWS to manage user access to AWS resources. The solution should support single sign-on (SSO). Which AWS service should the developer use?",
        "options": [
          "AWS Directory Service for Microsoft Active Directory",
          "AWS Single Sign-On",
          "AWS IAM with SAML Federation",
          "Amazon Cognito User Pools",
          "AWS STS with AssumeRole"
        ],
        "correct_answers": [0, 1],
        "explanation": "AWS Directory Service for Microsoft Active Directory allows integration with on-premises Active Directory. AWS Single Sign-On provides SSO capabilities and can integrate with Active Directory for centralized access management.",
        "question_type": "multiple-response"
      },
      {
        "id": "Q62",
        "question": "A developer is tasked with migrating a legacy application to AWS. The application requires a shared file system accessible by multiple EC2 instances across different Availability Zones. Which AWS service should be used to meet this requirement?",
        "options": [
          "Amazon EBS",
          "Amazon S3",
          "Amazon EFS",
          "Amazon FSx for Windows File Server",
          "AWS Storage Gateway"
        ],
        "correct_answers": [2],
        "explanation": "Amazon EFS (Elastic File System) provides a scalable, fully managed shared file system that can be mounted by multiple EC2 instances across multiple Availability Zones.",
        "question_type": "single-choice"
      },
      {
        "id": "Q63",
        "question": "A social media company needs to analyze petabytes of unstructured data to provide insights and trends. The solution should be cost-effective and allow the use of standard SQL queries. Which AWS service should the developer choose?",
        "options": [
          "Amazon Redshift",
          "Amazon EMR",
          "Amazon Athena",
          "AWS Glue",
          "Amazon QuickSight"
        ],
        "correct_answers": [2],
        "explanation": "Amazon Athena is an interactive query service that makes it easy to analyze large-scale data in Amazon S3 using standard SQL, without the need for complex ETL processes.",
        "question_type": "single-choice"
      },
      {
        "id": "Q64",
        "question": "An organization wants to implement a CI/CD pipeline that includes code testing, building, and deployment for containerized applications. They prefer a fully managed solution that integrates with AWS services. Which combination of AWS services should the developer use?",
        "options": [
          "AWS CodeCommit, AWS CodeBuild, AWS CodeDeploy",
          "AWS CodePipeline, AWS CodeBuild, Amazon ECR, AWS Fargate",
          "AWS CodeStar, AWS Elastic Beanstalk, Amazon S3",
          "AWS CodeDeploy, AWS CloudFormation, AWS Lambda",
          "Amazon ECS, AWS Batch, AWS CodeArtifact"
        ],
        "correct_answers": [1],
        "explanation": "AWS CodePipeline orchestrates the CI/CD workflow, AWS CodeBuild handles code building and testing, Amazon ECR stores container images, and AWS Fargate runs containers without managing servers.",
        "question_type": "single-choice"
      },
      {
        "id": "Q65",
        "question": "A company needs to ensure that their application can withstand the loss of an entire AWS region without downtime. The application uses a relational database. Which AWS architecture should the developer implement?",
        "options": [
          "Deploy the application across multiple Availability Zones with Amazon RDS Multi-AZ",
          "Use Amazon RDS Read Replicas in different regions",
          "Implement a multi-region active-active architecture using Amazon Aurora Global Database",
          "Use Amazon DynamoDB global tables",
          "Implement cross-region replication with Amazon S3"
        ],
        "correct_answers": [2],
        "explanation": "Amazon Aurora Global Database allows a single Aurora database to span multiple AWS regions, enabling fast local reads and disaster recovery from region-wide outages.",
        "question_type": "single-choice"
      },
      {
        "id": "Q66",
        "question": "An application needs to process images uploaded by users and extract text from them. The solution should require minimal machine learning expertise. Which AWS service should the developer use?",
        "options": [
          "Amazon Rekognition",
          "Amazon Textract",
          "Amazon Comprehend",
          "Amazon SageMaker",
          "AWS DeepLens"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Textract automatically extracts text and data from scanned documents and images, requiring no machine learning expertise.",
        "question_type": "single-choice"
      },
      {
        "id": "Q67",
        "question": "A developer is designing an event-driven architecture where an application needs to respond to changes in data stored in Amazon DynamoDB. Which AWS service should be used to capture and process these data changes in real-time?",
        "options": [
          "Amazon Kinesis Data Firehose",
          "AWS Lambda with DynamoDB Streams",
          "Amazon SNS",
          "AWS Step Functions",
          "Amazon SQS"
        ],
        "correct_answers": [1],
        "explanation": "DynamoDB Streams capture data modification events in DynamoDB tables, and AWS Lambda can be triggered by these streams to process the changes in real-time.",
        "question_type": "single-choice"
      },
      {
        "id": "Q68",
        "question": "A company needs to implement a secure, scalable API backend that can handle thousands of concurrent requests. The API should integrate with existing on-premises services using VPC connectivity. Which AWS services should the developer use?",
        "options": [
          "Amazon API Gateway with VPC Link and AWS Lambda",
          "Amazon EC2 instances behind an Application Load Balancer",
          "AWS AppSync with AWS Direct Connect",
          "Amazon CloudFront with Lambda@Edge",
          "AWS Elastic Beanstalk with Amazon RDS"
        ],
        "correct_answers": [0],
        "explanation": "Amazon API Gateway with VPC Link allows secure, scalable API endpoints that can integrate with services in a VPC, including on-premises services connected via AWS Direct Connect or VPN.",
        "question_type": "single-choice"
      },
      {
        "id": "Q69",
        "question": "An online education platform needs to deliver video content to users worldwide while restricting access to only authenticated users. Which AWS services can help achieve secure content delivery?",
        "options": [
          "Amazon S3 with pre-signed URLs",
          "Amazon CloudFront with signed URLs and Amazon S3",
          "AWS WAF with Amazon CloudFront",
          "Amazon EC2 with security groups",
          "AWS Shield Advanced"
        ],
        "correct_answers": [1],
        "explanation": "Amazon CloudFront with signed URLs can securely deliver content only to authenticated users. When used with Amazon S3 as the origin, it ensures secure and efficient content delivery worldwide.",
        "question_type": "single-choice"
      },
      {
        "id": "Q70",
        "question": "A financial application requires executing transactions with ACID properties and complex queries. The database must automatically scale storage and compute resources. Which AWS database service should the developer use?",
        "options": [
          "Amazon RDS for Oracle",
          "Amazon Aurora Serverless",
          "Amazon DynamoDB",
          "Amazon Redshift",
          "Amazon DocumentDB"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Aurora Serverless is a relational database that provides on-demand, autoscaling configurations for both storage and compute, supporting ACID transactions and complex queries.",
        "question_type": "single-choice"
      },
      {
        "id": "Q71",
        "question": "A developer needs to create a highly available, scalable RESTful API that can handle unpredictable traffic patterns. The solution should minimize operational overhead. Which AWS service should be used?",
        "options": [
          "Amazon EC2 with Auto Scaling",
          "AWS Lambda behind Amazon API Gateway",
          "Amazon ECS with Application Load Balancer",
          "AWS Elastic Beanstalk",
          "Amazon Lightsail"
        ],
        "correct_answers": [1],
        "explanation": "Using AWS Lambda behind Amazon API Gateway provides a serverless architecture that automatically scales to handle varying traffic patterns, reducing operational overhead.",
        "question_type": "single-choice"
      },
      {
        "id": "Q72",
        "question": "A data analytics company needs to process large datasets using Apache Spark and wants to minimize infrastructure management. The processing jobs are scheduled and do not require real-time interaction. Which AWS service should the developer choose?",
        "options": [
          "Amazon EMR",
          "AWS Glue",
          "Amazon Athena",
          "AWS Batch",
          "AWS Lambda"
        ],
        "correct_answers": [0],
        "explanation": "Amazon EMR provides a managed Hadoop framework that makes it easy, fast, and cost-effective to process vast amounts of data across dynamically scalable Amazon EC2 instances using tools like Apache Spark.",
        "question_type": "single-choice"
      },
      {
        "id": "Q73",
        "question": "An organization needs to distribute software packages to its global development teams securely and efficiently. The solution should support versioning and dependency management. Which AWS service should the developer use?",
        "options": [
          "AWS CodeDeploy",
          "Amazon S3 with versioning",
          "AWS CodeArtifact",
          "AWS CodeCommit",
          "Amazon ECR"
        ],
        "correct_answers": [2],
        "explanation": "AWS CodeArtifact is a fully managed artifact repository service that makes it easy for organizations to store, publish, and share software packages used in their software development process.",
        "question_type": "single-choice"
      },
      {
        "id": "Q74",
        "question": "A developer is building an application that requires serverless execution of backend logic triggered by HTTP requests. The application also needs to handle custom domain names and SSL certificates. Which AWS services should be used?",
        "options": [
          "AWS Lambda, Amazon API Gateway, AWS Certificate Manager",
          "Amazon EC2, Elastic Load Balancing, Amazon Route 53",
          "AWS Elastic Beanstalk, Amazon CloudFront, AWS WAF",
          "AWS AppSync, Amazon S3, AWS IAM",
          "AWS Fargate, Amazon ECS, AWS Cloud Map"
        ],
        "correct_answers": [0],
        "explanation": "AWS Lambda can execute backend logic serverlessly. Amazon API Gateway can handle HTTP requests and integrate with Lambda. AWS Certificate Manager manages SSL certificates, and custom domain names can be configured in API Gateway.",
        "question_type": "single-choice"
      },
      {
        "id": "Q75",
        "question": "A company wants to implement real-time language translation in its chat application. The solution should require minimal development effort and support multiple languages. Which AWS service should the developer use?",
        "options": [
          "Amazon Translate",
          "Amazon Comprehend",
          "Amazon Lex",
          "Amazon Polly",
          "AWS Transcribe"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Translate is a neural machine translation service that delivers fast, high-quality, and affordable language translation, suitable for real-time applications.",
        "question_type": "single-choice"
      },
      {
        "id": "Q76",
        "question": "A media company needs to deliver live streaming video content to a global audience with minimal latency. The solution should automatically scale and support various streaming protocols. Which AWS service should the developer use?",
        "options": [
          "Amazon CloudFront",
          "AWS Elemental MediaLive",
          "AWS Elemental MediaPackage",
          "Amazon S3",
          "AWS Lambda@Edge"
        ],
        "correct_answers": [1, 2],
        "explanation": "AWS Elemental MediaLive encodes live video streams, and AWS Elemental MediaPackage formats and protects video for delivery over the internet. Together, they provide a scalable solution for live video streaming.",
        "question_type": "multiple-response"
      },
      {
        "id": "Q77",
        "question": "An application needs to securely store user authentication tokens and provide temporary, limited-privilege credentials to access AWS resources. Which AWS service should the developer integrate into the application?",
        "options": [
          "AWS STS (Security Token Service)",
          "Amazon Cognito Identity Pools",
          "AWS IAM Roles",
          "AWS KMS",
          "AWS Secrets Manager"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Cognito Identity Pools provide temporary AWS credentials for users so they can access AWS resources directly. It integrates with STS to provide temporary, limited-privilege credentials.",
        "question_type": "single-choice"
      },
      {
        "id": "Q78",
        "question": "A developer is tasked with ensuring that an application complies with data residency requirements by storing data in specific geographical locations. Which AWS service or feature should be used to enforce this?",
        "options": [
          "Use AWS Organizations with Service Control Policies",
          "Configure S3 bucket policies to restrict regions",
          "Deploy resources to specific AWS regions",
          "Use AWS CloudTrail to log data access",
          "Implement VPC endpoints to control data flow"
        ],
        "correct_answers": [2],
        "explanation": "By deploying resources to specific AWS regions, developers can ensure that data remains within the geographical boundaries required by data residency laws.",
        "question_type": "single-choice"
      },
      {
        "id": "Q79",
        "question": "An enterprise application requires a message broker service that supports industry-standard APIs and protocols for messaging. The solution should be managed and handle failover automatically. Which AWS service should the developer choose?",
        "options": [
          "Amazon SQS",
          "Amazon SNS",
          "Amazon MQ",
          "AWS Step Functions",
          "Amazon Kinesis Data Streams"
        ],
        "correct_answers": [2],
        "explanation": "Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ that makes it easy to set up and operate message brokers in the cloud, supporting industry-standard APIs and protocols.",
        "question_type": "single-choice"
      },
      {
        "id": "Q80",
        "question": "A developer needs to implement real-time data analytics on clickstream data and generate metrics dashboards. The solution should be fully managed and integrate with visualization tools. Which AWS services should the developer use?",
        "options": [
          "Amazon Kinesis Data Analytics and Amazon QuickSight",
          "Amazon EMR and Amazon Athena",
          "AWS Glue and Amazon Redshift",
          "Amazon S3 and Amazon CloudWatch",
          "AWS Batch and AWS Data Pipeline"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Kinesis Data Analytics allows for real-time processing of streaming data. Amazon QuickSight is a business intelligence service for creating dashboards, integrating seamlessly with Kinesis Data Analytics.",
        "question_type": "single-choice"
      },
      {
        "id": "Q81",
        "question": "A company wants to automate the process of code reviews and application performance recommendations during the development phase. Which AWS service can provide this functionality?",
        "options": [
          "AWS CodeBuild",
          "AWS CodeDeploy",
          "AWS CodeGuru",
          "AWS CodePipeline",
          "AWS X-Ray"
        ],
        "correct_answers": [2],
        "explanation": "AWS CodeGuru is a developer tool powered by machine learning that provides intelligent recommendations for improving code quality and identifying performance issues.",
        "question_type": "single-choice"
      },
      {
        "id": "Q82",
        "question": "An organization needs to implement a data lake solution to store vast amounts of structured and unstructured data. The solution should enable efficient querying and analytics. Which combination of AWS services should the developer use?",
        "options": [
          "Amazon S3, AWS Glue, Amazon Athena",
          "Amazon RDS, Amazon Redshift, AWS Data Pipeline",
          "Amazon DynamoDB, AWS Lambda, Amazon QuickSight",
          "Amazon EFS, AWS Batch, AWS Glue",
          "Amazon S3 Glacier, AWS Snowball, AWS EMR"
        ],
        "correct_answers": [0],
        "explanation": "Amazon S3 provides scalable storage for data lakes, AWS Glue catalogs and prepares data, and Amazon Athena enables querying data in S3 using SQL, making them suitable for building a data lake solution.",
        "question_type": "single-choice"
      },
      {
        "id": "Q83",
        "question": "A developer needs to set up event-driven notifications whenever new objects are uploaded to an S3 bucket. The notifications should trigger processing functions. Which AWS services can be integrated to achieve this?",
        "options": [
          "Amazon S3 and AWS Lambda",
          "Amazon S3 and Amazon SNS",
          "Amazon S3 and Amazon SQS",
          "Amazon S3, AWS Lambda, and Amazon SNS",
          "Amazon S3, AWS Lambda, and Amazon SQS"
        ],
        "correct_answers": [0, 3, 4],
        "explanation": "Amazon S3 can be configured to send event notifications to AWS Lambda, Amazon SNS, or Amazon SQS. Integrating S3 with Lambda allows for processing functions to be triggered directly.",
        "question_type": "multiple-response"
      },
      {
        "id": "Q84",
        "question": "A developer is building an application that requires storing JSON documents and needs to perform flexible queries on the data. The solution should be scalable and fully managed. Which AWS database service should the developer choose?",
        "options": [
          "Amazon RDS for PostgreSQL",
          "Amazon DocumentDB (with MongoDB compatibility)",
          "Amazon DynamoDB",
          "Amazon Neptune",
          "Amazon S3"
        ],
        "correct_answers": [1],
        "explanation": "Amazon DocumentDB is a scalable, highly durable, and fully managed database service for operating mission-critical MongoDB workloads, ideal for storing and querying JSON documents.",
        "question_type": "single-choice"
      },
      {
        "id": "Q85",
        "question": "An enterprise needs to ensure compliance by managing and enforcing policies for multiple AWS accounts. The solution should centralize control and provide governance. Which AWS service should the developer use?",
        "options": [
          "AWS Config",
          "AWS Organizations with Service Control Policies",
          "AWS IAM Roles",
          "AWS CloudTrail",
          "AWS Control Tower"
        ],
        "correct_answers": [1, 4],
        "explanation": "AWS Organizations with Service Control Policies allows centralized management of policies across multiple AWS accounts. AWS Control Tower automates the setup of a landing zone and enforces policies for governance.",
        "question_type": "multiple-response"
      },
      {
        "id": "Q86",
        "question": "A developer needs to implement user activity tracking and collect metrics from an application running on EC2 instances. The data should be stored for analysis and visualization. Which AWS services should be used?",
        "options": [
          "Amazon CloudWatch Logs and Amazon S3",
          "Amazon Kinesis Data Firehose and Amazon Redshift",
          "AWS X-Ray and Amazon DynamoDB",
          "AWS CloudTrail and AWS Glue",
          "Amazon CloudWatch Metrics and AWS Step Functions"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Kinesis Data Firehose can capture and load streaming data into data stores like Amazon Redshift, which can then be used for analysis and visualization.",
        "question_type": "single-choice"
      },
      {
        "id": "Q87",
        "question": "A company wants to deploy a web application using a containerized environment but does not want to manage the underlying infrastructure. The application requires high availability across multiple Availability Zones. Which AWS service should the developer use?",
        "options": [
          "Amazon ECS with EC2 Launch Type",
          "Amazon ECS with AWS Fargate",
          "Amazon EKS on EC2",
          "AWS Elastic Beanstalk with Docker",
          "AWS Lambda with Container Image Support"
        ],
        "correct_answers": [1],
        "explanation": "Amazon ECS with AWS Fargate allows developers to run containers without managing servers or clusters, providing high availability across multiple Availability Zones.",
        "question_type": "single-choice"
      },
      {
        "id": "Q88",
        "question": "An application requires real-time face recognition capabilities in videos for security purposes. Which AWS service provides this functionality with minimal development effort?",
        "options": [
          "Amazon Rekognition Video",
          "Amazon SageMaker",
          "AWS DeepLens",
          "Amazon Kinesis Video Streams",
          "AWS Lambda with OpenCV"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Rekognition Video can analyze videos in real-time for face recognition and other detection capabilities, requiring minimal development effort.",
        "question_type": "single-choice"
      },
      {
        "id": "Q89",
        "question": "A developer needs to implement a GraphQL API for an application with real-time subscription capabilities and offline access. The solution should be managed and scalable. Which AWS service should be used?",
        "options": [
          "Amazon API Gateway",
          "AWS AppSync",
          "AWS Lambda",
          "Amazon CloudFront",
          "Amazon DynamoDB"
        ],
        "correct_answers": [1],
        "explanation": "AWS AppSync is a managed service that makes it easy to build GraphQL APIs, providing real-time data synchronization and offline capabilities.",
        "question_type": "single-choice"
      },
      {
        "id": "Q90",
        "question": "An organization needs to ensure that their AWS Lambda functions have access to the latest configuration data without redeploying the code. The configuration data should be securely stored and versioned. Which AWS service should the developer use?",
        "options": [
          "AWS Secrets Manager",
          "AWS Systems Manager Parameter Store",
          "AWS AppConfig",
          "Amazon S3 with versioning",
          "AWS Lambda Environment Variables"
        ],
        "correct_answers": [2],
        "explanation": "AWS AppConfig, a feature of AWS Systems Manager, allows for the controlled rollout of application configuration changes, including versioning and validation, without redeploying code.",
        "question_type": "single-choice"
      },
      {
        "id": "Q91",
        "question": "A mobile application requires user authentication and wants to offer social sign-in options such as Facebook and Google. The solution should also support multi-factor authentication (MFA). Which AWS service should the developer integrate?",
        "options": [
          "AWS IAM",
          "Amazon Cognito User Pools",
          "AWS Directory Service",
          "AWS Single Sign-On",
          "AWS STS"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Cognito User Pools provide user directory management and can integrate with social identity providers. They also support MFA for enhanced security.",
        "question_type": "single-choice"
      },
      {
        "id": "Q92",
        "question": "A developer needs to implement a managed, scalable in-memory data store that supports data structures such as sorted sets and lists for a leaderboards feature. Which AWS service should be used?",
        "options": [
          "Amazon ElastiCache for Memcached",
          "Amazon ElastiCache for Redis",
          "Amazon DynamoDB",
          "Amazon RDS",
          "Amazon Neptune"
        ],
        "correct_answers": [1],
        "explanation": "Amazon ElastiCache for Redis supports advanced data structures like sorted sets and lists, making it suitable for use cases like leaderboards.",
        "question_type": "single-choice"
      },
      {
        "id": "Q93",
        "question": "An application processes sensitive financial transactions and needs to ensure that data is encrypted end-to-end, including in-transit and at-rest encryption with customer-managed keys. Which AWS services should the developer use?",
        "options": [
          "AWS KMS with customer-managed CMKs",
          "AWS Certificate Manager for SSL/TLS certificates",
          "Server-side encryption with Amazon S3 managed keys",
          "AWS CloudHSM for key storage",
          "AWS Secrets Manager"
        ],
        "correct_answers": [0, 1, 3],
        "explanation": "AWS KMS with customer-managed CMKs allows control over encryption keys. AWS Certificate Manager provides SSL/TLS certificates for in-transit encryption. AWS CloudHSM allows for storing encryption keys in hardware security modules managed by the customer.",
        "question_type": "multiple-response"
      },
      {
        "id": "Q94",
        "question": "A developer is building a multi-tenant SaaS application and needs to ensure that each tenant's data is isolated while using the same database instance. Which AWS service feature can help achieve this?",
        "options": [
          "Use IAM policies to control access",
          "Implement row-level security in Amazon Redshift",
          "Use DynamoDB with partition keys",
          "Use Amazon RDS with database schemas per tenant",
          "Use VPCs to isolate tenant data"
        ],
        "correct_answers": [3],
        "explanation": "Using Amazon RDS with separate database schemas for each tenant can provide logical data isolation within the same database instance, suitable for multi-tenant applications.",
        "question_type": "single-choice"
      },
      {
        "id": "Q95",
        "question": "An application requires performing ETL (Extract, Transform, Load) operations on data stored in Amazon S3 and loading it into Amazon Redshift. The solution should be serverless and fully managed. Which AWS service should the developer use?",
        "options": [
          "AWS Glue",
          "AWS Data Pipeline",
          "Amazon EMR",
          "AWS Lambda",
          "Amazon Kinesis Data Firehose"
        ],
        "correct_answers": [0],
        "explanation": "AWS Glue is a fully managed ETL service that makes it easy to prepare and load data for analytics. It can catalog data in S3 and load it into Amazon Redshift.",
        "question_type": "single-choice"
      },
      {
        "id": "Q96",
        "question": "A developer needs to deploy an application that requires WebSockets for real-time communication and wants to minimize operational overhead. Which AWS service should be used to host this application?",
        "options": [
          "Amazon API Gateway WebSocket APIs",
          "Amazon EC2 with Node.js server",
          "AWS Elastic Beanstalk",
          "AWS AppSync",
          "AWS Lambda with API Gateway REST APIs"
        ],
        "correct_answers": [0],
        "explanation": "Amazon API Gateway supports WebSocket APIs, allowing developers to build bidirectional communication applications without managing servers.",
        "question_type": "single-choice"
      },
      {
        "id": "Q97",
        "question": "An organization needs to implement centralized logging for compliance and auditing purposes. Logs should be collected from multiple AWS accounts and regions. Which AWS service or feature should the developer use?",
        "options": [
          "Amazon CloudWatch Logs with cross-account subscriptions",
          "AWS CloudTrail with CloudTrail Lake",
          "Amazon S3 with cross-account access",
          "AWS Config with aggregated data",
          "AWS Systems Manager"
        ],
        "correct_answers": [1],
        "explanation": "AWS CloudTrail Lake provides a centralized repository for CloudTrail logs from multiple accounts and regions, suitable for compliance and auditing purposes.",
        "question_type": "single-choice"
      },
      {
        "id": "Q98",
        "question": "A developer wants to automate security checks and enforce best practices in their AWS environment during the deployment process. Which AWS service can help achieve this?",
        "options": [
          "AWS Trusted Advisor",
          "AWS Config Rules",
          "AWS Security Hub",
          "AWS CodePipeline with manual approvals",
          "AWS CodeDeploy with deployment hooks"
        ],
        "correct_answers": [2],
        "explanation": "AWS Security Hub provides a comprehensive view of security alerts and compliance status. It can automate security checks and enforce best practices during deployment.",
        "question_type": "single-choice"
      },
      {
        "id": "Q99",
        "question": "An application running on AWS needs to make API calls to a third-party service that requires a static IP address for whitelisting. The application is deployed using AWS Lambda. How can the developer ensure the Lambda function uses a static IP?",
        "options": [
          "Assign an Elastic IP to the Lambda function",
          "Deploy the Lambda function in a VPC with a NAT Gateway using Elastic IP",
          "Use AWS Global Accelerator",
          "Configure Lambda to use a static outbound IP address",
          "Use AWS Direct Connect"
        ],
        "correct_answers": [1],
        "explanation": "By deploying the Lambda function in a VPC and routing outbound traffic through a NAT Gateway with an associated Elastic IP, the function can use a static IP address.",
        "question_type": "single-choice"
      },
      {
        "id": "Q100",
        "question": "A developer is building an application that requires orchestrating multiple AWS services and custom scripts to perform complex workflows. The workflows should be auditable and have error handling. Which AWS service should be used?",
        "options": [
          "AWS Step Functions",
          "AWS Lambda",
          "AWS Batch",
          "AWS Glue Workflows",
          "Amazon EventBridge"
        ],
        "correct_answers": [0],
        "explanation": "AWS Step Functions is a serverless orchestration service that lets developers build and run workflows that coordinate multiple AWS services. It provides built-in error handling and audit trails.",
        "question_type": "single-choice"
      }
    ]

    [
      {
        "id": "Q101",
        "question": "A fintech startup is developing a mobile banking application that requires secure authentication and authorization for users. The application must support multi-factor authentication (MFA) and social sign-in options like Google and Facebook. Additionally, the startup wants to minimize the operational overhead of managing user directories and authentication flows. Which AWS service should the developer integrate into the application?",
        "options": [
          "AWS IAM with custom authentication code",
          "Amazon Cognito User Pools and Identity Pools",
          "AWS Directory Service with Microsoft AD",
          "Implement a custom authentication system using EC2 instances",
          "Use AWS Lambda to handle authentication logic"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Cognito provides user sign-up, sign-in, and access control, supporting MFA and social identity providers. It reduces operational overhead by managing user directories and authentication flows.",
        "question_type": "single-choice"
      },
      {
        "id": "Q102",
        "question": "An online learning platform needs to deliver video content to students worldwide. The platform must ensure low latency and high transfer speeds, regardless of the user's location. Additionally, the content must be secured so that only authenticated users can access it. Which combination of AWS services should the developer use to meet these requirements?",
        "options": [
          "Amazon S3 with public read access",
          "Amazon CloudFront with signed URLs and Amazon S3 as the origin",
          "Amazon Elastic Transcoder with Amazon S3",
          "AWS Global Accelerator with Amazon EC2",
          "Amazon RDS with Multi-AZ deployment"
        ],
        "correct_answers": [1],
        "explanation": "Using Amazon CloudFront with signed URLs and Amazon S3 as the origin ensures global content delivery with low latency. Signed URLs restrict access to authenticated users.",
        "question_type": "single-choice"
      },
      {
        "id": "Q103",
        "question": "A healthcare company needs to store patient records securely in compliance with HIPAA regulations. The data must be encrypted at rest and in transit, and access to the data must be strictly controlled and audited. Which AWS services and features should the developer use to meet these requirements?",
        "options": [
          "Amazon S3 with default encryption and server-side encryption using AWS KMS-managed keys",
          "Store data on Amazon EFS with standard permissions",
          "Use AWS IAM roles to restrict access and enable CloudTrail for auditing",
          "Implement client-side encryption before storing data in Amazon S3",
          "Use Amazon DynamoDB with client-side encryption"
        ],
        "correct_answers": [0, 2],
        "explanation": "Amazon S3 with server-side encryption using AWS KMS-managed keys ensures data is encrypted at rest. Using IAM roles to restrict access and enabling CloudTrail provides auditing capabilities, meeting HIPAA compliance.",
        "question_type": "multiple-response"
      },
      {
        "id": "Q104",
        "question": "A logistics company needs to track the location of its delivery trucks in real-time and display this information on a dashboard. The data from the trucks is sent every few seconds. The solution should be able to handle data from thousands of trucks simultaneously and process it with minimal latency. Which AWS services should the developer use to build this solution?",
        "options": [
          "Amazon Kinesis Data Streams for ingesting data",
          "AWS IoT Core for managing device communication",
          "Amazon SQS for message queuing",
          "Amazon EC2 instances with WebSockets",
          "Amazon RDS for storing location data"
        ],
        "correct_answers": [0, 1],
        "explanation": "Amazon Kinesis Data Streams can ingest and process large volumes of streaming data in real-time. AWS IoT Core can manage communication with the devices (trucks), making it suitable for IoT applications.",
        "question_type": "multiple-response"
      },
      {
        "id": "Q105",
        "question": "An e-commerce company wants to personalize product recommendations for its users based on their browsing and purchase history. The solution should leverage machine learning but the team lacks ML expertise. Which AWS service can help the developer implement this feature with minimal effort?",
        "options": [
          "Amazon SageMaker",
          "Amazon Personalize",
          "AWS DeepLens",
          "Amazon Comprehend",
          "AWS Lambda with custom ML code"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Personalize allows developers to build real-time personalization and recommendation engines without needing machine learning expertise.",
        "question_type": "single-choice"
      },
      {
        "id": "Q106",
        "question": "A media streaming company needs to transcode videos uploaded by users into multiple formats for compatibility with various devices. The solution should be scalable and cost-effective, handling varying volumes of uploads without manual intervention. Which AWS service should the developer use?",
        "options": [
          "Amazon Elastic Transcoder",
          "AWS Lambda with custom transcoding code",
          "Amazon EC2 instances with FFmpeg",
          "AWS Batch with Docker containers",
          "AWS Elemental MediaConvert"
        ],
        "correct_answers": [4],
        "explanation": "AWS Elemental MediaConvert is a file-based video transcoding service with broadcast-grade features, suitable for converting video files into various formats and scalable based on demand.",
        "question_type": "single-choice"
      },
      {
        "id": "Q107",
        "question": "A gaming company wants to store player session data with high availability and low latency. The data is non-relational and requires real-time read and write access. Which AWS database service should the developer choose to meet these requirements?",
        "options": [
          "Amazon RDS with Multi-AZ deployment",
          "Amazon DynamoDB with on-demand capacity",
          "Amazon Aurora Serverless",
          "Amazon ElastiCache for Memcached",
          "Amazon Neptune"
        ],
        "correct_answers": [1],
        "explanation": "Amazon DynamoDB is a fully managed NoSQL database service that provides low-latency performance at any scale, making it ideal for storing session data.",
        "question_type": "single-choice"
      },
      {
        "id": "Q108",
        "question": "A financial institution needs to process transactions in real-time and requires that each transaction is processed exactly once to avoid duplication. The system should be highly available and scalable. Which AWS services and features should the developer use to design this solution?",
        "options": [
          "Amazon SQS Standard Queue",
          "Amazon SQS FIFO Queue",
          "Amazon SNS with message filtering",
          "Use AWS Lambda with idempotent processing logic",
          "Implement application-level deduplication in code"
        ],
        "correct_answers": [1, 3],
        "explanation": "Amazon SQS FIFO Queues ensure that messages are processed exactly once and in the order they are sent. Using AWS Lambda with idempotent processing logic ensures that repeated invocations do not result in duplicate processing.",
        "question_type": "multiple-response"
      },
      {
        "id": "Q109",
        "question": "A startup is building a serverless web application that requires a backend API to interact with a database. The application should scale automatically and minimize operational overhead. Which combination of AWS services should the developer use to build the API layer?",
        "options": [
          "Amazon EC2 with Auto Scaling",
          "AWS Lambda and Amazon API Gateway",
          "Amazon ECS with Fargate",
          "AWS Elastic Beanstalk",
          "Amazon Lightsail"
        ],
        "correct_answers": [1],
        "explanation": "AWS Lambda and Amazon API Gateway provide a fully managed serverless architecture that scales automatically, reducing operational overhead for the developer.",
        "question_type": "single-choice"
      },
      {
        "id": "Q110",
        "question": "A company wants to migrate its monolithic application to a microservices architecture on AWS to improve scalability and maintainability. The application needs to manage complex transactions that span multiple services, requiring coordination and state management. Which AWS service should the developer use to orchestrate these microservices?",
        "options": [
          "Amazon SQS",
          "AWS Step Functions",
          "AWS AppSync",
          "AWS Lambda with SNS triggers",
          "Amazon EventBridge"
        ],
        "correct_answers": [1],
        "explanation": "AWS Step Functions is a serverless function orchestrator that can coordinate multiple AWS services into serverless workflows, managing state and sequencing for complex transactions.",
        "question_type": "single-choice"
      },
      {
        "id": "Q111",
        "question": "An online marketplace wants to implement a search functionality that provides fast and relevant search results to users. The search engine must handle a large volume of data and support complex queries and filtering. Which AWS service should the developer use to implement this search feature?",
        "options": [
          "Amazon RDS with full-text search",
          "Amazon CloudSearch",
          "Amazon Elasticsearch Service (Amazon OpenSearch Service)",
          "Amazon DynamoDB with Global Secondary Indexes",
          "Amazon Kendra"
        ],
        "correct_answers": [2],
        "explanation": "Amazon OpenSearch Service (successor to Amazon Elasticsearch Service) is a managed service that makes it easy to deploy, operate, and scale OpenSearch clusters, suitable for full-text search and analytics.",
        "question_type": "single-choice"
      },
      {
        "id": "Q112",
        "question": "A company needs to set up a continuous integration and continuous delivery (CI/CD) pipeline for its application code hosted in GitHub. The pipeline should automatically build, test, and deploy the code to AWS whenever changes are pushed to the repository. Which AWS services should the developer use to build this pipeline?",
        "options": [
          "AWS CodeCommit, AWS CodeBuild, AWS CodeDeploy, AWS CodePipeline",
          "AWS CodePipeline, AWS CodeBuild, AWS CodeDeploy with GitHub integration",
          "AWS CodeStar with AWS CodeCommit",
          "AWS Elastic Beanstalk with GitHub integration",
          "AWS CloudFormation with custom resources"
        ],
        "correct_answers": [1],
        "explanation": "AWS CodePipeline integrates with GitHub and can orchestrate the build, test, and deployment process using AWS CodeBuild and AWS CodeDeploy, forming a complete CI/CD pipeline.",
        "question_type": "single-choice"
      },
      {
        "id": "Q113",
        "question": "A media company needs to analyze user engagement data in near real-time to make quick content recommendations. The data streams are high volume and require processing with low latency. Which AWS service should the developer use to process and analyze this streaming data?",
        "options": [
          "Amazon Kinesis Data Analytics",
          "Amazon EMR",
          "AWS Glue",
          "Amazon Athena",
          "Amazon Redshift"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Kinesis Data Analytics allows developers to process and analyze streaming data in real-time using SQL or Apache Flink, suitable for near real-time analytics.",
        "question_type": "single-choice"
      },
      {
        "id": "Q114",
        "question": "A retail company wants to implement a chatbot on its website to assist customers with frequently asked questions. The chatbot should understand natural language and provide accurate responses. The solution should require minimal machine learning expertise. Which AWS service should the developer use?",
        "options": [
          "Amazon Lex",
          "Amazon Polly",
          "Amazon Comprehend",
          "Amazon Transcribe",
          "AWS DeepRacer"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Lex is a service for building conversational interfaces using voice and text. It provides natural language understanding and requires minimal machine learning expertise.",
        "question_type": "single-choice"
      },
      {
        "id": "Q115",
        "question": "A developer is building an application that needs to send email notifications to users based on certain triggers. The emails should be sent reliably and the service should handle large volumes of emails efficiently. Which AWS service should the developer use?",
        "options": [
          "Amazon SES (Simple Email Service)",
          "Amazon SNS (Simple Notification Service)",
          "AWS Lambda",
          "Amazon SQS",
          "Amazon Pinpoint"
        ],
        "correct_answers": [0],
        "explanation": "Amazon SES is a cost-effective, flexible, and scalable email service that enables developers to send mail from within any application reliably and efficiently.",
        "question_type": "single-choice"
      },
      {
        "id": "Q116",
        "question": "An IoT company needs to ingest and process data from millions of devices globally. The data must be processed in real-time, and actions must be taken based on specific data patterns. The solution should be scalable and manage device connections securely. Which AWS services should the developer use?",
        "options": [
          "AWS IoT Core and AWS Lambda",
          "Amazon Kinesis Data Streams and Amazon EMR",
          "Amazon SQS and AWS Step Functions",
          "Amazon API Gateway and AWS Fargate",
          "AWS AppSync and Amazon DynamoDB"
        ],
        "correct_answers": [0],
        "explanation": "AWS IoT Core allows secure, bi-directional communication between IoT devices and AWS services. AWS Lambda can process the data in real-time and trigger actions based on data patterns.",
        "question_type": "single-choice"
      },
      {
        "id": "Q117",
        "question": "A developer needs to implement authentication for a mobile application, allowing users to sign in with their existing enterprise credentials managed in Microsoft Active Directory. The solution should also support MFA. Which AWS service should the developer use?",
        "options": [
          "Amazon Cognito with SAML federation",
          "AWS Directory Service",
          "AWS Single Sign-On",
          "AWS IAM with LDAP integration",
          "Amazon Cognito User Pools with social identity providers"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Cognito supports SAML federation, allowing users to sign in using existing enterprise credentials from Microsoft Active Directory. It also supports MFA.",
        "question_type": "single-choice"
      },
      {
        "id": "Q118",
        "question": "A financial analytics application requires running complex queries on large datasets with high performance and needs to support standard SQL. The data is structured and grows by several gigabytes daily. Which AWS service should the developer use to store and query this data efficiently?",
        "options": [
          "Amazon RDS for MySQL",
          "Amazon DynamoDB",
          "Amazon Redshift",
          "Amazon Aurora",
          "Amazon S3 with Amazon Athena"
        ],
        "correct_answers": [2],
        "explanation": "Amazon Redshift is a fast, scalable data warehouse that makes it simple and cost-effective to analyze all your data using standard SQL and existing BI tools.",
        "question_type": "single-choice"
      },
      {
        "id": "Q119",
        "question": "A company wants to implement a real-time notification system that sends alerts to multiple subscriber endpoints such as email, SMS, and mobile push notifications. The system should be highly available and scalable. Which AWS service should the developer use?",
        "options": [
          "Amazon SQS",
          "Amazon SNS",
          "AWS Lambda",
          "Amazon MQ",
          "AWS Step Functions"
        ],
        "correct_answers": [1],
        "explanation": "Amazon SNS is a fully managed pub/sub messaging service that enables message delivery to multiple endpoints such as email, SMS, and mobile push notifications.",
        "question_type": "single-choice"
      },
      {
        "id": "Q120",
        "question": "A developer is tasked with moving a legacy application to AWS. The application requires a shared file system that can be accessed by multiple EC2 instances across different Availability Zones. The file system should provide high throughput and support thousands of concurrent connections. Which AWS service should the developer use?",
        "options": [
          "Amazon EFS (Elastic File System)",
          "Amazon S3",
          "Amazon EBS with Multi-Attach",
          "Amazon FSx for Lustre",
          "AWS Storage Gateway"
        ],
        "correct_answers": [0],
        "explanation": "Amazon EFS is a fully managed, scalable, shared file system that can be mounted concurrently by multiple EC2 instances across multiple Availability Zones, supporting high throughput and thousands of connections.",
        "question_type": "single-choice"
      },
      {
        "id": "Q121",
        "question": "A developer needs to create a data processing workflow that involves multiple steps and conditional logic. The workflow should be easy to visualize and modify, with support for error handling and retries. Which AWS service should the developer use to manage this workflow?",
        "options": [
          "AWS Step Functions",
          "AWS Lambda",
          "AWS Batch",
          "Amazon SWF (Simple Workflow Service)",
          "AWS Glue Workflows"
        ],
        "correct_answers": [0],
        "explanation": "AWS Step Functions allows developers to build visual workflows with support for conditional logic, error handling, and retries, making it easy to manage complex workflows.",
        "question_type": "single-choice"
      },
      {
        "id": "Q122",
        "question": "An online retailer wants to analyze customer behavior by processing clickstream data in real-time to offer personalized recommendations. The solution should handle large volumes of streaming data with low latency. Which AWS service should the developer use for real-time data ingestion and processing?",
        "options": [
          "Amazon Kinesis Data Streams",
          "Amazon SQS",
          "Amazon SNS",
          "Amazon Kinesis Data Firehose",
          "Amazon EMR"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Kinesis Data Streams is designed for real-time data streaming, allowing applications to process and analyze streaming data with low latency.",
        "question_type": "single-choice"
      },
      {
        "id": "Q123",
        "question": "A company needs to migrate its existing Docker-based applications to AWS without managing the underlying servers. The applications require integration with other AWS services and need to scale automatically based on demand. Which AWS service should the developer choose?",
        "options": [
          "Amazon ECS with EC2 Launch Type",
          "Amazon EKS",
          "AWS Fargate",
          "AWS Elastic Beanstalk with Docker",
          "Amazon Lightsail"
        ],
        "correct_answers": [2],
        "explanation": "AWS Fargate is a serverless compute engine for containers that works with Amazon ECS and EKS, allowing developers to run containers without managing servers, and it scales automatically based on demand.",
        "question_type": "single-choice"
      },
      {
        "id": "Q124",
        "question": "A developer needs to store application configuration data that can be changed at runtime without redeploying the application. The configuration data should be securely stored and versioned, and the application should retrieve the latest configuration upon startup. Which AWS service should be used?",
        "options": [
          "AWS Secrets Manager",
          "AWS Systems Manager Parameter Store",
          "Amazon S3 with versioning",
          "AWS AppConfig",
          "AWS Lambda Environment Variables"
        ],
        "correct_answers": [3],
        "explanation": "AWS AppConfig is a feature of AWS Systems Manager that allows for controlled deployment of application configurations, including secure storage, versioning, and the ability to change configurations without redeploying applications.",
        "question_type": "single-choice"
      },
      {
        "id": "Q125",
        "question": "A mobile gaming company needs to authenticate users and sync game progress across devices. The solution should be scalable, handle millions of users, and minimize development effort. Which AWS service should the developer use?",
        "options": [
          "Amazon Cognito Sync",
          "AWS AppSync",
          "AWS IAM with custom authentication",
          "Amazon DynamoDB with custom sync logic",
          "AWS Mobile Hub"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Cognito Sync is a service that enables cross-device syncing of application-related user data and provides user authentication, suitable for mobile applications with minimal development effort.",
        "question_type": "single-choice"
      },
      {
        "id": "Q126",
        "question": "A developer needs to build an application that processes images uploaded by users and performs real-time image recognition to tag objects in the images. The solution should require minimal machine learning expertise. Which AWS service should the developer use?",
        "options": [
          "Amazon Rekognition",
          "Amazon SageMaker",
          "AWS Lambda with custom ML code",
          "Amazon Comprehend",
          "Amazon Textract"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Rekognition provides image and video analysis, allowing developers to add image recognition capabilities to applications without requiring machine learning expertise.",
        "question_type": "single-choice"
      },
      {
        "id": "Q127",
        "question": "An enterprise needs to implement data encryption for an application that stores sensitive information in Amazon RDS. The encryption keys must be managed by the company's security team, and the solution should meet compliance requirements for key management. Which AWS service should the developer use?",
        "options": [
          "AWS KMS with AWS-managed CMKs",
          "AWS KMS with customer-managed CMKs",
          "AWS CloudHSM",
          "Server-side encryption with RDS-managed keys",
          "Client-side encryption managed by the application"
        ],
        "correct_answers": [2],
        "explanation": "AWS CloudHSM provides hardware security modules that allow the company to manage its own encryption keys, meeting strict compliance requirements for key management.",
        "question_type": "single-choice"
      },
      {
        "id": "Q128",
        "question": "A logistics company wants to optimize delivery routes in real-time based on traffic data and delivery priorities. The application requires processing large amounts of spatial data and performing complex geospatial queries. Which AWS service should the developer use?",
        "options": [
          "Amazon DynamoDB with spatial indexes",
          "Amazon RDS for PostgreSQL with PostGIS extension",
          "Amazon Redshift",
          "Amazon Elasticsearch Service (Amazon OpenSearch Service)",
          "AWS Lambda with custom geospatial libraries"
        ],
        "correct_answers": [1],
        "explanation": "Amazon RDS for PostgreSQL supports the PostGIS extension, which provides geospatial capabilities, allowing complex spatial queries and data processing suitable for route optimization.",
        "question_type": "single-choice"
      },
      {
        "id": "Q129",
        "question": "A developer is designing a multi-tenant SaaS application and needs to ensure that each tenant's data is isolated and encrypted at rest. The solution should be scalable and use AWS managed services. Which approach should the developer take?",
        "options": [
          "Create separate DynamoDB tables for each tenant",
          "Use Amazon RDS with table-level permissions",
          "Implement data partitioning and use AWS KMS with tenant-specific CMKs",
          "Store tenant data in separate S3 buckets",
          "Use AWS Organizations to isolate tenant data"
        ],
        "correct_answers": [2],
        "explanation": "Implementing data partitioning and using AWS KMS with customer master keys (CMKs) specific to each tenant ensures data isolation and encryption at rest while leveraging AWS managed services.",
        "question_type": "single-choice"
      },
      {
        "id": "Q130",
        "question": "An application requires performing batch processing of large datasets on a schedule. The processing tasks are CPU-intensive and can take several hours to complete. The company wants to minimize costs and use a managed service. Which AWS service should the developer use?",
        "options": [
          "AWS Batch",
          "AWS Lambda",
          "Amazon EC2 with Spot Instances",
          "AWS Glue",
          "AWS Step Functions"
        ],
        "correct_answers": [0],
        "explanation": "AWS Batch enables developers to run batch computing workloads of any scale using AWS resources. It manages compute resources and job scheduling, making it suitable for scheduled batch processing.",
        "question_type": "single-choice"
      },
      {
        "id": "Q131",
        "question": "A developer needs to deploy an application that requires both web sockets for real-time communication and RESTful APIs. The application should be scalable and require minimal operational overhead. Which AWS services should the developer use?",
        "options": [
          "Amazon API Gateway with WebSocket APIs and HTTP APIs",
          "Amazon EC2 with NGINX",
          "AWS Elastic Beanstalk",
          "AWS AppSync",
          "Amazon Lightsail"
        ],
        "correct_answers": [0],
        "explanation": "Amazon API Gateway supports both WebSocket APIs for real-time communication and HTTP APIs for RESTful endpoints, providing a scalable and fully managed solution with minimal operational overhead.",
        "question_type": "single-choice"
      },
      {
        "id": "Q132",
        "question": "A data analytics company wants to build a serverless application that processes data in real-time, stores results, and allows clients to query the data using SQL. The solution should be highly scalable and cost-effective. Which combination of AWS services should the developer use?",
        "options": [
          "AWS Lambda, Amazon Kinesis Data Streams, Amazon Aurora Serverless",
          "Amazon EC2, Amazon RDS, Amazon SQS",
          "AWS Glue, Amazon Redshift, Amazon S3",
          "AWS Fargate, Amazon DynamoDB, Amazon QuickSight",
          "Amazon EMR, Amazon Athena, Amazon S3"
        ],
        "correct_answers": [0],
        "explanation": "AWS Lambda can process data in real-time from Amazon Kinesis Data Streams. Amazon Aurora Serverless provides a scalable, serverless relational database that can be queried using SQL, making it suitable for this use case.",
        "question_type": "single-choice"
      },
      {
        "id": "Q133",
        "question": "An organization wants to implement Infrastructure as Code (IaC) to automate the provisioning of its AWS resources, including complex applications and dependencies. The solution should support multiple programming languages. Which AWS service or tool should the developer use?",
        "options": [
          "AWS CloudFormation",
          "AWS OpsWorks",
          "AWS Elastic Beanstalk",
          "AWS Cloud Development Kit (CDK)",
          "AWS CodeDeploy"
        ],
        "correct_answers": [3],
        "explanation": "AWS Cloud Development Kit (CDK) is an open-source software development framework that allows developers to define cloud infrastructure using familiar programming languages, supporting multiple languages like TypeScript, Python, Java, and C#.",
        "question_type": "single-choice"
      },
      {
        "id": "Q134",
        "question": "A developer needs to monitor an application running on AWS and receive notifications when specific operational thresholds are breached, such as high CPU utilization or low available memory. The solution should require minimal setup. Which AWS service should the developer use?",
        "options": [
          "Amazon CloudWatch Alarms",
          "AWS X-Ray",
          "AWS CloudTrail",
          "Amazon SNS with custom scripts",
          "AWS Config Rules"
        ],
        "correct_answers": [0],
        "explanation": "Amazon CloudWatch Alarms can monitor AWS resources and applications, triggering notifications or actions when thresholds are breached, requiring minimal setup.",
        "question_type": "single-choice"
      },
      {
        "id": "Q135",
        "question": "A company wants to automate code reviews to improve code quality and identify potential security vulnerabilities before code is merged into the main branch. Which AWS service can help the developer achieve this?",
        "options": [
          "AWS CodeDeploy",
          "AWS CodePipeline",
          "AWS CodeCommit",
          "AWS CodeGuru Reviewer",
          "AWS CodeBuild"
        ],
        "correct_answers": [3],
        "explanation": "AWS CodeGuru Reviewer uses machine learning to identify critical issues, security vulnerabilities, and hard-to-find bugs during code reviews, helping improve code quality before merging.",
        "question_type": "single-choice"
      },
      {
        "id": "Q136",
        "question": "An application requires caching frequently accessed data to improve performance and reduce latency. The data is read-intensive and changes infrequently. Which AWS service should the developer use to implement this caching layer?",
        "options": [
          "Amazon ElastiCache for Redis",
          "Amazon DynamoDB Accelerator (DAX)",
          "Amazon CloudFront",
          "AWS Lambda with ephemeral storage",
          "Amazon S3 Transfer Acceleration"
        ],
        "correct_answers": [0],
        "explanation": "Amazon ElastiCache for Redis is an in-memory data store that provides sub-millisecond latency, ideal for caching frequently accessed data to improve application performance.",
        "question_type": "single-choice"
      },
      {
        "id": "Q137",
        "question": "A developer is building a serverless application using AWS Lambda functions. The functions need to share common code, such as utility functions and libraries, without duplicating code across functions. Which AWS feature allows the developer to package and reuse code across multiple Lambda functions?",
        "options": [
          "Lambda Layers",
          "Lambda Aliases",
          "Lambda Destinations",
          "Lambda Versions",
          "Lambda Edge"
        ],
        "correct_answers": [0],
        "explanation": "Lambda Layers allow developers to package and share common code and libraries across multiple Lambda functions, reducing code duplication and simplifying updates.",
        "question_type": "single-choice"
      },
      {
        "id": "Q138",
        "question": "An e-commerce application needs to process orders and ensure that each order is processed exactly once, even in the case of application failures. The system should be decoupled and scalable. Which combination of AWS services should the developer use?",
        "options": [
          "Amazon SQS Standard Queue and AWS Lambda",
          "Amazon SNS and Amazon SQS Standard Queue",
          "Amazon SQS FIFO Queue and AWS Lambda",
          "Amazon Kinesis Data Streams and AWS Lambda",
          "Amazon MQ and Amazon EC2"
        ],
        "correct_answers": [2],
        "explanation": "Amazon SQS FIFO Queues ensure exactly-once processing and preserve the order of messages. Combined with AWS Lambda, this creates a decoupled and scalable system for processing orders exactly once.",
        "question_type": "single-choice"
      },
      {
        "id": "Q139",
        "question": "A developer needs to implement an API that serves requests from mobile clients and wants to minimize the data transferred over the network to reduce latency and costs. The API should compress responses automatically. Which AWS service and feature should the developer use?",
        "options": [
          "Amazon API Gateway with payload compression",
          "AWS Lambda with gzip compression in code",
          "Amazon CloudFront with compression",
          "Amazon EC2 with NGINX and compression enabled",
          "Amazon S3 with Transfer Acceleration"
        ],
        "correct_answers": [0],
        "explanation": "Amazon API Gateway supports payload compression for responses, reducing the amount of data transferred over the network, improving latency, and reducing costs.",
        "question_type": "single-choice"
      },
      {
        "id": "Q140",
        "question": "An organization wants to implement a multi-factor authentication (MFA) solution for accessing AWS resources via the AWS CLI and SDKs. The solution should be centralized and easy to manage for multiple users. Which AWS service should the developer use?",
        "options": [
          "AWS IAM with MFA devices",
          "AWS Single Sign-On",
          "AWS Directory Service",
          "Amazon Cognito",
          "AWS STS with AssumeRole"
        ],
        "correct_answers": [1],
        "explanation": "AWS Single Sign-On provides centralized access management, including MFA, for accessing AWS resources via the AWS CLI and SDKs, making it easy to manage for multiple users.",
        "question_type": "single-choice"
      },
      {
        "id": "Q141",
        "question": "A developer needs to schedule a serverless function to run periodically, executing code without managing any servers. The function should run every hour to perform maintenance tasks. Which AWS service should the developer use to schedule this function?",
        "options": [
          "Amazon CloudWatch Events (EventBridge) with AWS Lambda",
          "AWS Step Functions with a Wait state",
          "AWS Batch with scheduled jobs",
          "AWS Glue Jobs with triggers",
          "Amazon SQS with delay queues"
        ],
        "correct_answers": [0],
        "explanation": "Amazon EventBridge (formerly CloudWatch Events) can trigger AWS Lambda functions on a schedule, allowing serverless functions to run periodically without managing servers.",
        "question_type": "single-choice"
      },
      {
        "id": "Q142",
        "question": "An application running on AWS needs to generate reports by querying data stored in Amazon S3 using SQL. The data is in CSV format and the application requires ad-hoc querying capabilities without setting up a database. Which AWS service should the developer use?",
        "options": [
          "Amazon Athena",
          "Amazon Redshift Spectrum",
          "Amazon EMR",
          "AWS Glue Data Catalog",
          "Amazon QuickSight"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL without the need to set up or manage a database.",
        "question_type": "single-choice"
      },
      {
        "id": "Q143",
        "question": "A company needs to detect anomalies in real-time from streaming data to identify potential fraudulent activities. The solution should require minimal machine learning expertise. Which AWS service should the developer use?",
        "options": [
          "Amazon Kinesis Data Analytics with custom ML code",
          "Amazon SageMaker",
          "Amazon Lookout for Metrics",
          "AWS DeepLens",
          "Amazon Comprehend"
        ],
        "correct_answers": [2],
        "explanation": "Amazon Lookout for Metrics automatically detects anomalies in metrics and helps diagnose their root cause, requiring minimal machine learning expertise.",
        "question_type": "single-choice"
      },
      {
        "id": "Q144",
        "question": "A developer needs to store application logs for an extended period to meet compliance requirements. The logs are infrequently accessed but must be retrievable within minutes when needed. The solution should minimize storage costs. Which AWS service and storage class should the developer use?",
        "options": [
          "Amazon S3 Standard storage class",
          "Amazon S3 Glacier storage class",
          "Amazon S3 Glacier Deep Archive storage class",
          "Amazon S3 Standard-Infrequent Access (S3 Standard-IA)",
          "Amazon S3 Intelligent-Tiering"
        ],
        "correct_answers": [1],
        "explanation": "Amazon S3 Glacier storage class is designed for data archiving where retrieval times of minutes are acceptable, offering lower storage costs compared to S3 Standard-IA.",
        "question_type": "single-choice"
      },
      {
        "id": "Q145",
        "question": "An application requires integrating with an on-premises system using a REST API. The on-premises system is accessible via a VPN connection to AWS. The developer needs to expose this integration as an API endpoint accessible over the internet, but the on-premises system should remain secure. Which AWS service should the developer use to create this API endpoint?",
        "options": [
          "Amazon API Gateway with VPC Link",
          "AWS Direct Connect",
          "Amazon CloudFront",
          "AWS Lambda with VPC access",
          "AWS AppSync"
        ],
        "correct_answers": [0],
        "explanation": "Amazon API Gateway with VPC Link allows developers to create API endpoints that can access resources inside a VPC (including over VPN connections), exposing the API securely over the internet while keeping the on-premises system secure.",
        "question_type": "single-choice"
      },
      {
        "id": "Q146",
        "question": "A developer is building an application that needs to send push notifications to mobile devices across multiple platforms (iOS, Android). The solution should be scalable and manage device tokens automatically. Which AWS service should the developer use?",
        "options": [
          "Amazon SNS with Mobile Push Notifications",
          "AWS Pinpoint",
          "Amazon SQS",
          "AWS Mobile Hub",
          "AWS Lambda with custom push notification code"
        ],
        "correct_answers": [0],
        "explanation": "Amazon SNS provides Mobile Push Notifications, supporting multiple platforms and handling device tokens automatically, making it suitable for sending push notifications at scale.",
        "question_type": "single-choice"
      },
      {
        "id": "Q147",
        "question": "An organization wants to enforce governance policies across multiple AWS accounts, ensuring that only approved services and configurations are used. The solution should be scalable and centrally managed. Which AWS service should the developer use?",
        "options": [
          "AWS Config with custom rules",
          "AWS Organizations with Service Control Policies",
          "AWS IAM with cross-account roles",
          "AWS CloudFormation StackSets",
          "AWS Trusted Advisor"
        ],
        "correct_answers": [1],
        "explanation": "AWS Organizations with Service Control Policies (SCPs) allow central control over the maximum available permissions for all accounts in an organization, enforcing governance policies across multiple accounts.",
        "question_type": "single-choice"
      },
      {
        "id": "Q148",
        "question": "A developer needs to implement real-time text-to-speech conversion in an application to provide audio output for text content. The solution should support multiple languages and voices. Which AWS service should the developer use?",
        "options": [
          "Amazon Polly",
          "Amazon Transcribe",
          "Amazon Comprehend",
          "AWS DeepComposer",
          "Amazon Lex"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Polly is a service that turns text into lifelike speech, supporting multiple languages and voices, suitable for real-time text-to-speech conversion.",
        "question_type": "single-choice"
      },
      {
        "id": "Q149",
        "question": "A company needs to ensure that all data stored in Amazon S3 is replicated across multiple AWS regions for disaster recovery purposes. The replication should be automatic and consistent. Which AWS feature should the developer use?",
        "options": [
          "S3 Versioning",
          "S3 Cross-Region Replication (CRR)",
          "S3 Transfer Acceleration",
          "S3 Lifecycle Policies",
          "S3 Object Lock"
        ],
        "correct_answers": [1],
        "explanation": "S3 Cross-Region Replication (CRR) automatically replicates objects in a bucket to a bucket in another AWS region, providing disaster recovery capabilities.",
        "question_type": "single-choice"
      },
      {
        "id": "Q150",
        "question": "A developer is building an application that requires real-time facial analysis to detect emotions in user images. The application should be able to identify emotions like happiness, sadness, and surprise. Which AWS service provides this functionality with minimal development effort?",
        "options": [
          "Amazon Rekognition",
          "Amazon SageMaker",
          "AWS DeepLens",
          "Amazon Comprehend",
          "AWS Lambda with OpenCV"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Rekognition provides facial analysis capabilities, including emotion detection, allowing developers to add this functionality to applications with minimal effort.",
        "question_type": "single-choice"
      }
   ,
      {
        "id": "Q151",
        "question": "A company is building a serverless application that processes images uploaded by users. When a new image is uploaded to an Amazon S3 bucket, the application should automatically create a thumbnail and store it back in the S3 bucket. Which AWS services should the developer use to build this solution?",
        "options": [
          "AWS Lambda to process the image",
          "Amazon SQS to queue image processing requests",
          "Amazon S3 Event Notifications to trigger the Lambda function",
          "AWS Elastic Beanstalk to host the application",
          "Amazon EC2 instances to process the image"
        ],
        "correct_answers": [0, 2],
        "explanation": "AWS Lambda can be triggered by Amazon S3 Event Notifications when a new object is created. The Lambda function can process the image and create a thumbnail, which can then be stored back in the S3 bucket.",
        "question_type": "multiple-response"
      },
      {
        "id": "Q152",
        "question": "An organization needs to run a scheduled task every hour to generate reports by querying data from Amazon DynamoDB and storing the results in Amazon S3. The task should be serverless and require minimal management. Which AWS services should the developer use?",
        "options": [
          "AWS Lambda with a CloudWatch Events (EventBridge) rule",
          "Amazon EC2 with a cron job",
          "AWS Lambda with AWS Step Functions",
          "AWS Glue Job triggered on a schedule",
          "AWS Batch with scheduled compute environments"
        ],
        "correct_answers": [0],
        "explanation": "AWS Lambda can be scheduled using Amazon EventBridge (formerly CloudWatch Events) to run every hour. The Lambda function can query DynamoDB and store the results in S3.",
        "question_type": "single-choice"
      },
      {
        "id": "Q153",
        "question": "A developer needs to deploy a RESTful API that scales automatically and integrates with AWS Lambda functions. The API should provide HTTPS endpoints and support authorization mechanisms. Which AWS service should the developer use to create the API?",
        "options": [
          "Amazon API Gateway",
          "Amazon EC2 with NGINX",
          "AWS AppSync",
          "AWS Elastic Beanstalk",
          "AWS Lambda Function URLs"
        ],
        "correct_answers": [0],
        "explanation": "Amazon API Gateway is a fully managed service that allows developers to create, publish, maintain, monitor, and secure APIs at any scale. It integrates with AWS Lambda and provides HTTPS endpoints with support for authorization.",
        "question_type": "single-choice"
      },
      {
        "id": "Q154",
        "question": "A company wants to reduce the latency of its Lambda functions that are invoked infrequently but require consistent performance. The functions experience cold starts due to inactivity. Which AWS feature can help improve the performance of these Lambda functions?",
        "options": [
          "Increase the memory allocation of the Lambda functions",
          "Enable AWS Lambda Reserved Concurrency",
          "Use Provisioned Concurrency for the Lambda functions",
          "Deploy the functions in a VPC",
          "Enable AWS X-Ray tracing"
        ],
        "correct_answers": [2],
        "explanation": "Provisioned Concurrency initializes a requested number of execution environments so that they are prepared to respond immediately to invocations, reducing cold start latency.",
        "question_type": "single-choice"
      },
      {
        "id": "Q155",
        "question": "An application requires executing a Lambda function whenever new messages are published to an Amazon SNS topic. The function should process the message and store the results in a database. How should the developer configure the Lambda function to be triggered by the SNS topic?",
        "options": [
          "Configure the Lambda function as a subscriber to the SNS topic",
          "Set up an Amazon SQS queue and poll it with the Lambda function",
          "Use Amazon API Gateway to trigger the Lambda function",
          "Manually invoke the Lambda function when messages arrive",
          "Set up an EventBridge rule to trigger the Lambda function"
        ],
        "correct_answers": [0],
        "explanation": "Lambda functions can be configured as subscribers to SNS topics, allowing them to be invoked automatically when new messages are published.",
        "question_type": "single-choice"
      },
      {
        "id": "Q156",
        "question": "A developer is creating a serverless application that needs to connect to a private Amazon RDS instance within a VPC. The Lambda function must access the RDS instance securely. How should the developer configure the Lambda function?",
        "options": [
          "Deploy the Lambda function inside the VPC with appropriate subnet and security group",
          "Enable Lambda internet access by attaching a NAT gateway",
          "Use AWS Direct Connect to connect to the RDS instance",
          "Place the Lambda function in a public subnet",
          "Use an API Gateway to proxy requests to the RDS instance"
        ],
        "correct_answers": [0],
        "explanation": "To access resources inside a VPC, the Lambda function must be configured to run within the VPC and associated with the appropriate subnets and security groups.",
        "question_type": "single-choice"
      },
      {
        "id": "Q157",
        "question": "An application processes real-time streaming data from Amazon Kinesis Data Streams. The developer needs to ensure that the Lambda function processes records in order and retries on failure without data loss. What should the developer do?",
        "options": [
          "Use AWS Step Functions to manage the processing",
          "Configure the Lambda function with an Event Source Mapping to the Kinesis stream",
          "Manually poll the Kinesis stream from the Lambda function",
          "Set up an Amazon SQS queue between Kinesis and Lambda",
          "Use Amazon Kinesis Data Firehose to deliver data to Lambda"
        ],
        "correct_answers": [1],
        "explanation": "By configuring an Event Source Mapping between Kinesis Data Streams and Lambda, the Lambda function can process records in order with built-in retry logic.",
        "question_type": "single-choice"
      },
      {
        "id": "Q158",
        "question": "A company wants to deploy a Lambda function that depends on a large number of external libraries totaling 300 MB. The deployment package size limit is 250 MB uncompressed. How can the developer package and deploy the Lambda function?",
        "options": [
          "Use Lambda Layers to include the external libraries",
          "Upload the deployment package directly to Lambda",
          "Store the libraries in Amazon S3 and download them at runtime",
          "Use AWS CodeCommit to store the deployment package",
          "Refactor the code to reduce the size of the dependencies"
        ],
        "correct_answers": [0],
        "explanation": "Lambda Layers allow developers to include additional code and content in the form of layers, which can be up to 250 MB each, and can be shared across multiple functions.",
        "question_type": "single-choice"
      },
      {
        "id": "Q159",
        "question": "A developer needs to secure environment variables containing sensitive data in a Lambda function. The data must be encrypted at rest and decrypted only when the function is invoked. What is the recommended way to achieve this?",
        "options": [
          "Use AWS KMS to encrypt the environment variables",
          "Store the sensitive data in plaintext in the environment variables",
          "Encrypt the data using a third-party library before storing",
          "Hardcode the sensitive data into the Lambda function code",
          "Store the sensitive data in an unencrypted S3 bucket"
        ],
        "correct_answers": [0],
        "explanation": "AWS Lambda allows environment variables to be encrypted using AWS KMS, ensuring that sensitive data is protected and decrypted only during invocation.",
        "question_type": "single-choice"
      },
      {
        "id": "Q160",
        "question": "An application requires processing events from an Amazon SQS queue using AWS Lambda. The processing should scale automatically based on the number of messages in the queue. What is the best way to configure this integration?",
        "options": [
          "Configure an Event Source Mapping between the SQS queue and the Lambda function",
          "Manually poll the SQS queue from the Lambda function",
          "Use Amazon SNS to trigger the Lambda function",
          "Set up a CloudWatch Events rule to invoke the Lambda function",
          "Use AWS Step Functions to manage the polling and invocation"
        ],
        "correct_answers": [0],
        "explanation": "An Event Source Mapping between SQS and Lambda allows Lambda to poll the queue and invoke the function with messages, scaling automatically based on queue size.",
        "question_type": "single-choice"
      },
      {
        "id": "Q161",
        "question": "A developer needs to troubleshoot a Lambda function that is not performing as expected. They want to analyze the execution flow and debug performance issues. Which AWS service can provide insights into the Lambda function's execution?",
        "options": [
          "AWS X-Ray",
          "Amazon CloudWatch Logs",
          "AWS CloudTrail",
          "AWS Trusted Advisor",
          "AWS Config"
        ],
        "correct_answers": [0],
        "explanation": "AWS X-Ray helps developers analyze and debug distributed applications, including Lambda functions, by providing end-to-end tracing of requests.",
        "question_type": "single-choice"
      },
      {
        "id": "Q162",
        "question": "An organization wants to deploy a Lambda function that requires packages and dependencies totaling 500 MB. The function should be built and deployed using container images. How can the developer accomplish this?",
        "options": [
          "Use AWS Lambda Container Image Support with images stored in Amazon ECR",
          "Package the function code in a ZIP file and upload it directly to Lambda",
          "Split the function into smaller functions to reduce the package size",
          "Store the dependencies in Amazon S3 and download them at runtime",
          "Use AWS CodeDeploy to deploy the function"
        ],
        "correct_answers": [0],
        "explanation": "AWS Lambda supports container images up to 10 GB in size, allowing developers to package functions and dependencies using container images stored in Amazon ECR.",
        "question_type": "single-choice"
      },
      {
        "id": "Q163",
        "question": "A serverless application uses multiple Lambda functions that share common code libraries. The developer wants to avoid code duplication and manage these libraries centrally. What is the recommended approach?",
        "options": [
          "Use Lambda Layers to package and share the common libraries",
          "Include the libraries in each Lambda function's deployment package",
          "Store the libraries in Amazon S3 and load them at runtime",
          "Use AWS CodeCommit to manage the libraries",
          "Deploy the libraries on an Amazon EFS file system mounted to the functions"
        ],
        "correct_answers": [0],
        "explanation": "Lambda Layers allow developers to package and share common code and dependencies across multiple Lambda functions, avoiding code duplication.",
        "question_type": "single-choice"
      },
      {
        "id": "Q164",
        "question": "An application running on AWS Lambda needs to access a private API hosted in Amazon API Gateway within a VPC. The Lambda function is configured to run inside the VPC. How can the function securely access the private API?",
        "options": [
          "Ensure the Lambda function's VPC configuration allows outbound access to the API",
          "Use a NAT Gateway to provide internet access to the Lambda function",
          "Configure the API Gateway to allow public access",
          "Use AWS Direct Connect to connect the Lambda function to the API",
          "Deploy the Lambda function in a public subnet"
        ],
        "correct_answers": [0],
        "explanation": "Since the Lambda function is inside the VPC, it needs to be configured with appropriate subnets and security groups to access the private API within the VPC.",
        "question_type": "single-choice"
      },
      {
        "id": "Q165",
        "question": "A developer needs to configure a Lambda function to process events from a DynamoDB stream. The function should scale with the stream's shard count and process records in order. How should the developer set up this integration?",
        "options": [
          "Create an Event Source Mapping between the DynamoDB stream and the Lambda function",
          "Manually poll the DynamoDB stream from the Lambda function",
          "Use Amazon Kinesis Data Firehose to deliver records to Lambda",
          "Set up an Amazon SQS queue subscribed to the DynamoDB stream",
          "Use AWS Step Functions to orchestrate the processing"
        ],
        "correct_answers": [0],
        "explanation": "An Event Source Mapping between the DynamoDB stream and the Lambda function allows Lambda to process stream records, maintaining order and scaling with shard count.",
        "question_type": "single-choice"
      },
      {
        "id": "Q166",
        "question": "A company wants to expose a Lambda function as an HTTP endpoint without using Amazon API Gateway or Application Load Balancer. The function should be accessible over HTTPS. Which feature can the developer use?",
        "options": [
          "AWS Lambda Function URLs",
          "AWS AppSync",
          "Amazon CloudFront with Lambda@Edge",
          "AWS Elastic Beanstalk",
          "Amazon S3 Static Website Hosting"
        ],
        "correct_answers": [0],
        "explanation": "AWS Lambda Function URLs provide a dedicated HTTPS endpoint for a Lambda function, allowing it to be invoked via HTTP without additional services.",
        "question_type": "single-choice"
      },
      {
        "id": "Q167",
        "question": "An application requires a Lambda function to process data and then call another Lambda function. The developer wants to ensure that the second function is invoked only after the first function succeeds. Which AWS service can help orchestrate this workflow?",
        "options": [
          "AWS Step Functions",
          "Amazon SQS with Lambda triggers",
          "AWS Lambda Destinations",
          "Amazon SNS to publish events",
          "Invoke the second function directly from the first function's code"
        ],
        "correct_answers": [0],
        "explanation": "AWS Step Functions allow developers to orchestrate multiple Lambda functions in a workflow, ensuring that functions are invoked sequentially and handling success or failure.",
        "question_type": "single-choice"
      },
      {
        "id": "Q168",
        "question": "A Lambda function is experiencing timeouts when accessing an Amazon RDS database within a VPC. The function's timeout is set to 15 minutes, and it is configured to run inside the VPC with correct subnets and security groups. What could be causing the issue?",
        "options": [
          "The Lambda function does not have internet access to reach RDS",
          "The RDS database is not publicly accessible",
          "The Lambda function's execution role lacks permissions to access RDS",
          "The network ACLs are blocking traffic between Lambda and RDS",
          "The Lambda function's memory allocation is insufficient"
        ],
        "correct_answers": [3],
        "explanation": "If network ACLs are misconfigured, they can block traffic between the Lambda function and the RDS instance, causing timeouts despite correct subnets and security groups.",
        "question_type": "single-choice"
      },
      {
        "id": "Q169",
        "question": "A developer wants to improve the cold start performance of a Lambda function running inside a VPC. What steps can the developer take to reduce cold start times?",
        "options": [
          "Allocate more memory to the Lambda function",
          "Enable Provisioned Concurrency for the function",
          "Reduce the size of the deployment package",
          "Use AWS Lambda Layers",
          "Migrate the function to run outside the VPC if possible"
        ],
        "correct_answers": [1, 4],
        "explanation": "Enabling Provisioned Concurrency keeps the function initialized and ready to respond, reducing cold starts. Running the function outside the VPC can also reduce cold start times because VPC networking adds overhead.",
        "question_type": "multiple-response"
      },
      {
        "id": "Q170",
        "question": "A serverless application uses Lambda functions that need to access AWS services such as Amazon S3 and DynamoDB. According to best practices, how should the developer configure access to these services?",
        "options": [
          "Attach an IAM role to the Lambda function with necessary permissions",
          "Embed AWS credentials in the Lambda function's environment variables",
          "Include AWS credentials in the function's code",
          "Use AWS STS to generate temporary credentials at runtime",
          "Allow public access to the AWS resources"
        ],
        "correct_answers": [0],
        "explanation": "Attaching an IAM role to the Lambda function provides it with the necessary permissions to access AWS services securely, following best practices.",
        "question_type": "single-choice"
      },
      {
        "id": "Q171",
        "question": "An application needs to perform real-time data transformation on requests coming through Amazon CloudFront before they reach the origin server. The developer wants to execute code at the edge locations with minimal latency. Which service should be used?",
        "options": [
          "CloudFront Functions",
          "Lambda@Edge",
          "AWS Lambda in the origin region",
          "Amazon API Gateway",
          "AWS WAF"
        ],
        "correct_answers": [0],
        "explanation": "CloudFront Functions allow developers to execute lightweight JavaScript functions at CloudFront edge locations with minimal latency, suitable for request and response manipulation.",
        "question_type": "single-choice"
      },
      {
        "id": "Q172",
        "question": "A developer needs to deploy a Lambda function that requires an AWS SDK version not available in the default Lambda runtime. How can the developer include the necessary SDK version in the function?",
        "options": [
          "Package the AWS SDK with the function code",
          "Use a Lambda Layer to include the AWS SDK",
          "Update the Lambda runtime to include the SDK",
          "Use the default AWS SDK provided by Lambda",
          "Download the SDK at runtime within the function"
        ],
        "correct_answers": [0, 1],
        "explanation": "The developer can either package the required AWS SDK with the function code or use a Lambda Layer to include the SDK, ensuring the function has the necessary dependencies.",
        "question_type": "multiple-response"
      },
      {
        "id": "Q173",
        "question": "A Lambda function processes messages from an SQS queue. The function occasionally fails due to transient errors, and messages are not processed. How can the developer ensure failed messages are retried and eventually captured if they continue to fail?",
        "options": [
          "Configure a Dead-Letter Queue (DLQ) for the Lambda function",
          "Set up automatic retries in the Lambda function code",
          "Increase the function's timeout to allow more processing time",
          "Use AWS Step Functions to manage retries",
          "Enable Lambda Destinations for failed invocations"
        ],
        "correct_answers": [0],
        "explanation": "Configuring a Dead-Letter Queue (DLQ) for the Lambda function allows failed messages to be captured after retries, ensuring they are not lost and can be analyzed or reprocessed.",
        "question_type": "single-choice"
      },
      {
        "id": "Q174",
        "question": "A developer needs to deploy a Lambda function that will be invoked by multiple AWS accounts. The function should be secure and only accessible to authorized accounts. How can the developer achieve this?",
        "options": [
          "Set up a resource-based policy on the Lambda function to allow access from specific accounts",
          "Share the function's ARN with all accounts and rely on IAM permissions",
          "Make the Lambda function publicly accessible",
          "Use AWS Organizations to share the Lambda function",
          "Deploy the function separately in each account"
        ],
        "correct_answers": [0],
        "explanation": "Resource-based policies on the Lambda function can grant cross-account access by specifying the AWS accounts that are allowed to invoke the function.",
        "question_type": "single-choice"
      },
      {
        "id": "Q175",
        "question": "An application uses AWS Lambda functions invoked via Amazon API Gateway. The developer wants to log the end-to-end latency of requests for monitoring purposes. Which AWS service can provide this tracing capability?",
        "options": [
          "AWS X-Ray",
          "Amazon CloudWatch Metrics",
          "AWS CloudTrail",
          "Amazon CloudWatch Logs",
          "AWS Trusted Advisor"
        ],
        "correct_answers": [0],
        "explanation": "AWS X-Ray can trace requests through the application, including API Gateway and Lambda functions, providing insights into end-to-end latency.",
        "question_type": "single-choice"
      },
      {
        "id": "Q176",
        "question": "A company is running a Lambda function that connects to an Amazon RDS database. The function is experiencing connection timeout errors under heavy load. What can the developer do to improve the reliability of database connections?",
        "options": [
          "Implement a connection pool within the Lambda function",
          "Increase the Lambda function's timeout setting",
          "Place the RDS database in a public subnet",
          "Use Amazon RDS Proxy to manage connections",
          "Increase the RDS instance size"
        ],
        "correct_answers": [3],
        "explanation": "Amazon RDS Proxy pools and shares database connections, improving the application's ability to handle bursts of connections and reducing the chance of timeouts.",
        "question_type": "single-choice"
      },
      {
        "id": "Q177",
        "question": "An application requires storing temporary files during processing within a Lambda function. The files are up to 5 GB in size. What is the best way to handle this requirement?",
        "options": [
          "Use the /tmp directory provided by Lambda",
          "Store the files in Amazon S3",
          "Mount an Amazon EFS file system to the Lambda function",
          "Use Amazon DynamoDB to store the files",
          "Increase the Lambda function's memory allocation"
        ],
        "correct_answers": [2],
        "explanation": "Mounting an Amazon EFS file system to the Lambda function allows for persistent, scalable storage beyond the 10 GB /tmp limit, suitable for large temporary files.",
        "question_type": "single-choice"
      },
      {
        "id": "Q178",
        "question": "A developer is deploying a Lambda function using AWS CloudFormation. They want to ensure that code updates automatically trigger function updates during stack updates. How should they reference the function code in the CloudFormation template?",
        "options": [
          "Use the S3Key property with a unique value each time",
          "Refer to the code using a fixed S3Bucket and S3Key",
          "Embed the code directly in the template using the ZipFile property",
          "Use AWS CodeCommit to store the code",
          "Manually update the function code after the stack is updated"
        ],
        "correct_answers": [0],
        "explanation": "Using the S3Key property with a unique value (e.g., including a version or hash) ensures CloudFormation detects changes and updates the Lambda function during stack updates.",
        "question_type": "single-choice"
      },
      {
        "id": "Q179",
        "question": "An organization wants to limit the number of concurrent executions of a specific Lambda function to prevent overloading downstream systems. How can the developer enforce this limit?",
        "options": [
          "Set a reserved concurrency limit on the Lambda function",
          "Use AWS Lambda throttling settings",
          "Configure API Gateway throttling limits",
          "Implement logic in the function code to limit executions",
          "Use AWS Step Functions to control concurrency"
        ],
        "correct_answers": [0],
        "explanation": "Setting a reserved concurrency limit on the Lambda function restricts the number of concurrent executions, preventing it from exceeding the specified limit.",
        "question_type": "single-choice"
      },
      {
        "id": "Q180",
        "question": "A developer needs to process files uploaded to Amazon S3 and requires additional metadata from the S3 event. How can the developer access this information within the Lambda function?",
        "options": [
          "Parse the event object passed to the Lambda function",
          "Use Amazon S3 API to retrieve the object metadata",
          "Configure the S3 event to include metadata",
          "Read metadata from the object's tags",
          "Set up an EventBridge rule to add metadata"
        ],
        "correct_answers": [0],
        "explanation": "The event object passed to the Lambda function contains information about the S3 object, including bucket name, object key, and event metadata, which can be parsed within the function.",
        "question_type": "single-choice"
      },
      {
        "id": "Q181",
        "question": "A Lambda function processes high volumes of events from an Amazon Kinesis Data Stream. The developer wants to increase the number of batches processed simultaneously to improve throughput. How can this be achieved?",
        "options": [
          "Increase the parallelization factor in the Event Source Mapping",
          "Increase the batch size in the Event Source Mapping",
          "Use multiple Lambda functions to process the stream",
          "Adjust the function's memory allocation",
          "Enable Lambda function versioning"
        ],
        "correct_answers": [0],
        "explanation": "Increasing the parallelization factor allows the Lambda function to process multiple batches from the same shard in parallel, improving throughput.",
        "question_type": "single-choice"
      },
      {
        "id": "Q182",
        "question": "An application uses a Lambda function to handle requests from API Gateway. The developer wants to route a percentage of traffic to a new version of the function for testing. What is the best way to implement this?",
        "options": [
          "Use Lambda Aliases with weighted traffic shifting",
          "Deploy the new version as a separate function",
          "Update the API Gateway integration to point to the new version",
          "Manually split traffic using client-side logic",
          "Use AWS CodeDeploy with a canary deployment configuration"
        ],
        "correct_answers": [0, 4],
        "explanation": "Lambda Aliases support weighted traffic shifting between versions, and AWS CodeDeploy can manage canary deployments for Lambda functions to route a percentage of traffic to a new version.",
        "question_type": "multiple-response"
      },
      {
        "id": "Q183",
        "question": "A developer needs to run code that initializes external dependencies before the Lambda function handler is invoked. What is the best practice for doing this to improve performance?",
        "options": [
          "Place the initialization code outside the Lambda handler function",
          "Place the initialization code inside the Lambda handler function",
          "Invoke another Lambda function for initialization",
          "Use AWS Step Functions to manage initialization",
          "Run the initialization code during each invocation"
        ],
        "correct_answers": [0],
        "explanation": "Placing initialization code outside the handler allows it to run during the function's initialization phase and be reused across invocations, improving performance by reducing execution time.",
        "question_type": "single-choice"
      },
      {
        "id": "Q184",
        "question": "An application needs to capture and store invocation events for a Lambda function, including successes and failures. The developer wants to process these events asynchronously. Which feature should be used?",
        "options": [
          "Lambda Destinations",
          "Dead-Letter Queues",
          "CloudWatch Logs",
          "AWS X-Ray",
          "Event Source Mapping"
        ],
        "correct_answers": [0],
        "explanation": "Lambda Destinations allow developers to capture invocation results and route them to services like SQS, SNS, Lambda, or EventBridge for asynchronous processing.",
        "question_type": "single-choice"
      },
      {
        "id": "Q185",
        "question": "A company wants to run code at AWS edge locations to customize content delivered by Amazon CloudFront. The code needs to perform network calls and have access to the request body. Which service should the developer use?",
        "options": [
          "Lambda@Edge",
          "CloudFront Functions",
          "AWS Lambda in the origin region",
          "Amazon API Gateway",
          "AWS WAF"
        ],
        "correct_answers": [0],
        "explanation": "Lambda@Edge allows developers to run Lambda functions at AWS edge locations with support for network calls and access to the request and response bodies.",
        "question_type": "single-choice"
      },
      {
        "id": "Q186",
        "question": "A developer needs to manage different versions of a Lambda function and promote code from development to production. They want to use aliases to point to specific versions. What is a limitation of Lambda aliases the developer should be aware of?",
        "options": [
          "Aliases cannot reference other aliases",
          "Aliases cannot be updated once created",
          "Aliases do not have unique ARNs",
          "Aliases cannot have resource-based policies",
          "Aliases cannot be used with event triggers"
        ],
        "correct_answers": [0],
        "explanation": "Lambda aliases cannot reference other aliases; they can only point to function versions or $LATEST.",
        "question_type": "single-choice"
      },
      {
        "id": "Q187",
        "question": "An application requires performing complex data transformations and needs a consistent runtime environment for testing and production. The developer wants to package the Lambda function with all dependencies and control the execution environment. What is the best approach?",
        "options": [
          "Use AWS Lambda Container Image Support",
          "Use Lambda Layers to include dependencies",
          "Configure the function with a custom runtime",
          "Package dependencies with the function code in a ZIP file",
          "Use AWS Elastic Beanstalk to run the function"
        ],
        "correct_answers": [0],
        "explanation": "Using AWS Lambda Container Image Support allows the developer to package the function and its dependencies into a container image, ensuring consistency across environments.",
        "question_type": "single-choice"
      },
      {
        "id": "Q188",
        "question": "A developer needs to automate the deployment of Lambda functions using AWS CloudFormation and ensure that environment variables containing sensitive information are encrypted. How can this be achieved?",
        "options": [
          "Specify the environment variables in CloudFormation and use the 'KmsKeyArn' property",
          "Store the environment variables in AWS Secrets Manager",
          "Embed the environment variables in the function code",
          "Use AWS Systems Manager Parameter Store without encryption",
          "Manually update the function after deployment to add encrypted variables"
        ],
        "correct_answers": [0],
        "explanation": "In the CloudFormation template, the developer can specify the environment variables and provide a KMS key ARN to encrypt them using the 'KmsKeyArn' property.",
        "question_type": "single-choice"
      },
      {
        "id": "Q189",
        "question": "An organization wants to implement a serverless application that requires high CPU and memory for data processing tasks. The developer needs to optimize the Lambda function for performance. What should they consider?",
        "options": [
          "Allocate more memory to the Lambda function, which also increases CPU",
          "Increase the function's timeout setting",
          "Use multiple smaller functions to distribute the load",
          "Use AWS Step Functions to manage execution",
          "Run the function inside a VPC for better performance"
        ],
        "correct_answers": [0],
        "explanation": "Increasing the memory allocated to a Lambda function also increases the proportion of CPU and network resources available, improving performance for CPU-intensive tasks.",
        "question_type": "single-choice"
      },
      {
        "id": "Q190",
        "question": "A developer needs to test a Lambda function locally before deploying it to AWS. The function interacts with AWS services. Which tool can help simulate the Lambda execution environment locally?",
        "options": [
          "AWS SAM CLI",
          "AWS CodeDeploy",
          "AWS CloudFormation",
          "AWS Lambda Console",
          "AWS CodeBuild"
        ],
        "correct_answers": [0],
        "explanation": "The AWS Serverless Application Model (SAM) CLI allows developers to locally test and debug Lambda functions, simulating the AWS Lambda execution environment.",
        "question_type": "single-choice"
      },
      {
        "id": "Q191",
        "question": "An application uses a Lambda function that needs to access Amazon S3 and Amazon DynamoDB. The function is timing out when trying to access these services. The function is inside a VPC. What could be the cause of this issue?",
        "options": [
          "The Lambda function lacks internet access to reach the AWS services",
          "The IAM role attached to the function lacks permissions",
          "The function's memory allocation is too low",
          "AWS services cannot be accessed from within a VPC",
          "The Lambda function is deployed in the wrong region"
        ],
        "correct_answers": [0],
        "explanation": "When a Lambda function is inside a VPC, it loses internet access by default. To access AWS services, the function needs a NAT gateway or VPC endpoints configured.",
        "question_type": "single-choice"
      },
      {
        "id": "Q192",
        "question": "A developer is configuring a Lambda function to process records from a DynamoDB stream. They need to ensure that if an error occurs, processing retries are minimized to prevent blocking the shard. What can they configure?",
        "options": [
          "Set the MaximumRetryAttempts in the Event Source Mapping",
          "Use a Dead-Letter Queue (DLQ)",
          "Configure the function's reserved concurrency",
          "Adjust the batch size in the Event Source Mapping",
          "Use AWS Lambda Destinations for failures"
        ],
        "correct_answers": [0],
        "explanation": "Setting the 'MaximumRetryAttempts' in the Event Source Mapping allows the developer to control the number of retries before discarding the batch, preventing the shard from being blocked due to repeated failures.",
        "question_type": "single-choice"
      },
      {
        "id": "Q193",
        "question": "An application needs to store state between invocations of a Lambda function. The state data is small and needs to be accessed with low latency. What is the best way to achieve this?",
        "options": [
          "Store the state in the function's /tmp directory",
          "Use an Amazon DynamoDB table to store the state",
          "Store the state in a global variable within the function",
          "Write the state to a file in Amazon S3",
          "Pass the state data as environment variables"
        ],
        "correct_answers": [1],
        "explanation": "Amazon DynamoDB provides low-latency data storage and retrieval, making it suitable for storing state between Lambda invocations.",
        "question_type": "single-choice"
      },
      {
        "id": "Q194",
        "question": "A developer needs to configure a Lambda function to automatically respond to Amazon S3 object creation events and process the objects. The processing can take up to 30 minutes per object. How can this be achieved?",
        "options": [
          "Invoke an AWS Step Functions workflow from the S3 event",
          "Set the Lambda function's timeout to 30 minutes",
          "Use an EC2 instance to process the objects",
          "Configure the Lambda function with Provisioned Concurrency",
          "Increase the function's memory allocation"
        ],
        "correct_answers": [0],
        "explanation": "Since Lambda functions have a maximum timeout of 15 minutes, using AWS Step Functions allows for longer-running processes by orchestrating multiple Lambda functions or integrating with other services.",
        "question_type": "single-choice"
      },
      {
        "id": "Q195",
        "question": "An application running on AWS Lambda needs to access sensitive configuration values at runtime. The configuration data should be encrypted and the application should retrieve the latest version when invoked. Which AWS service should be used?",
        "options": [
          "AWS Systems Manager Parameter Store with secure strings",
          "AWS Secrets Manager",
          "Environment variables encrypted with AWS KMS",
          "Store the configuration in Amazon S3 with server-side encryption",
          "Embed the configuration in the function code"
        ],
        "correct_answers": [1],
        "explanation": "AWS Secrets Manager provides a secure and convenient way to store and retrieve sensitive configuration data, with automatic rotation and secure access from Lambda functions.",
        "question_type": "single-choice"
      },
      {
        "id": "Q196",
        "question": "A developer needs to process a large batch of records from an S3 file using a Lambda function. They are concerned about hitting the function's maximum execution time. What is the best way to handle this processing?",
        "options": [
          "Use AWS Batch to process the records",
          "Break the processing into smaller chunks and use Lambda invocations recursively",
          "Increase the Lambda function's memory allocation",
          "Use a Step Functions workflow to manage the processing",
          "Process the records in parallel using multiple threads within the function"
        ],
        "correct_answers": [3],
        "explanation": "AWS Step Functions can manage complex workflows and handle longer-running tasks by orchestrating multiple Lambda functions or integrating with other services, avoiding Lambda's execution time limits.",
        "question_type": "single-choice"
      },
      {
        "id": "Q197",
        "question": "An application uses Lambda functions that need to be deployed across multiple regions. The developer wants to automate this process. What is the best practice for deploying Lambda functions in multiple regions?",
        "options": [
          "Use AWS CloudFormation StackSets to deploy across regions",
          "Manually deploy the functions in each region",
          "Use AWS Elastic Beanstalk to manage deployments",
          "Use AWS CodeDeploy with regional configurations",
          "Write a custom script to deploy functions via the AWS CLI"
        ],
        "correct_answers": [0],
        "explanation": "AWS CloudFormation StackSets allow developers to deploy stacks across multiple AWS accounts and regions with a single operation, automating multi-region deployments.",
        "question_type": "single-choice"
      },
      {
        "id": "Q198",
        "question": "An organization wants to analyze the resource usage and performance of their Lambda functions over time to optimize costs. Which AWS service provides insights into Lambda function metrics and can help with this analysis?",
        "options": [
          "Amazon CloudWatch",
          "AWS X-Ray",
          "AWS CloudTrail",
          "AWS Trusted Advisor",
          "AWS Config"
        ],
        "correct_answers": [0],
        "explanation": "Amazon CloudWatch collects and tracks metrics for Lambda functions, such as invocation count, duration, and errors, enabling analysis of resource usage and performance.",
        "question_type": "single-choice"
      },
      {
        "id": "Q199",
        "question": "A developer needs to process high-volume clickstream data in real-time using a serverless architecture. The data should be ingested, processed, and stored for analytics. Which combination of AWS services should be used?",
        "options": [
          "Amazon Kinesis Data Streams, AWS Lambda, Amazon S3",
          "Amazon SQS, AWS Lambda, Amazon DynamoDB",
          "Amazon Kinesis Data Firehose, AWS Lambda, Amazon Redshift",
          "Amazon SNS, AWS Lambda, Amazon S3",
          "Amazon SQS, AWS Lambda, Amazon S3"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Kinesis Data Streams can ingest high-volume streaming data. AWS Lambda can process the data in real-time, and the processed data can be stored in Amazon S3 for analytics.",
        "question_type": "single-choice"
      },
      {
        "id": "Q200",
        "question": "An application requires a Lambda function to handle requests from an Application Load Balancer (ALB). The function must receive HTTP headers and query string parameters. How does the ALB pass this information to the Lambda function?",
        "options": [
          "The ALB converts the HTTP request into a JSON event for the Lambda function",
          "The Lambda function receives the raw HTTP request",
          "The ALB stores the request data in an S3 bucket for the Lambda function",
          "The Lambda function must parse the data from a base64-encoded string",
          "The ALB cannot invoke Lambda functions directly"
        ],
        "correct_answers": [0],
        "explanation": "When ALB invokes a Lambda function, it converts the HTTP request into a JSON-formatted event that includes headers, query string parameters, and other request data.",
        "question_type": "single-choice"
      }
   ,
      {
        "id": "Q201",
        "question": "A company needs persistent block storage for its EC2 instances that can survive instance termination. The storage must be able to be resized and snapshots can be taken for backup purposes. Which AWS service should be used?",
        "options": [
          "Amazon EBS",
          "Instance Store",
          "Amazon EFS",
          "Amazon S3",
          "Amazon Glacier"
        ],
        "correct_answers": [0],
        "explanation": "Amazon EBS provides persistent block storage for EC2 instances, supports resizing, and allows snapshots for backups.",
        "question_type": "single-choice"
      },
      {
        "id": "Q202",
        "question": "An application requires high-performance temporary storage for caching data, but the data does not need to persist after the instance is stopped or terminated. Which storage option is most suitable?",
        "options": [
          "Amazon EBS Volume",
          "Instance Store",
          "Amazon EFS",
          "Amazon S3",
          "Amazon Glacier"
        ],
        "correct_answers": [1],
        "explanation": "Instance Store provides high-performance ephemeral storage that is ideal for temporary data that does not need to persist beyond the life of the instance.",
        "question_type": "single-choice"
      },
      {
        "id": "Q203",
        "question": "A developer needs to create a backup of an EBS volume for disaster recovery purposes. The backup should be stored in a different availability zone. What is the recommended approach?",
        "options": [
          "Create a snapshot of the EBS volume and copy it to the desired AZ",
          "Attach the volume to an instance in the other AZ",
          "Use Amazon EFS to replicate the data",
          "Use AWS Storage Gateway to transfer the data",
          "Create an AMI of the instance"
        ],
        "correct_answers": [0],
        "explanation": "EBS snapshots can be created from volumes and then copied to other AZs or regions for backup and disaster recovery.",
        "question_type": "single-choice"
      },
      {
        "id": "Q204",
        "question": "By default, what happens to the root EBS volume when an EC2 instance is terminated?",
        "options": [
          "It is deleted automatically",
          "It is detached and remains available",
          "It is moved to Amazon S3",
          "It is converted to a snapshot",
          "It becomes unusable"
        ],
        "correct_answers": [0],
        "explanation": "By default, the root EBS volume is deleted upon instance termination due to the 'Delete on Termination' attribute being enabled.",
        "question_type": "single-choice"
      },
      {
        "id": "Q205",
        "question": "An organization wants to launch EC2 instances with pre-installed software and configurations to reduce deployment time. What should they create to achieve this?",
        "options": [
          "An Amazon Machine Image (AMI)",
          "A snapshot of an EBS volume",
          "A CloudFormation template",
          "An AWS Elastic Beanstalk application",
          "An EC2 Launch Template"
        ],
        "correct_answers": [0],
        "explanation": "An Amazon Machine Image (AMI) is a pre-configured template that contains the software configuration required to launch an instance.",
        "question_type": "single-choice"
      },
      {
        "id": "Q206",
        "question": "A database application requires high IOPS performance and consistent low latency. Which EBS volume type should be selected?",
        "options": [
          "General Purpose SSD (gp2)",
          "Provisioned IOPS SSD (io1)",
          "Throughput Optimized HDD (st1)",
          "Cold HDD (sc1)",
          "Magnetic"
        ],
        "correct_answers": [1],
        "explanation": "Provisioned IOPS SSD (io1) volumes are designed for critical business applications that require sustained IOPS performance and low latency.",
        "question_type": "single-choice"
      },
      {
        "id": "Q207",
        "question": "An application requires low-cost storage for infrequently accessed data, where throughput is more important than IOPS. Which EBS volume type is most appropriate?",
        "options": [
          "General Purpose SSD (gp2)",
          "Provisioned IOPS SSD (io1)",
          "Throughput Optimized HDD (st1)",
          "Cold HDD (sc1)",
          "Magnetic"
        ],
        "correct_answers": [3],
        "explanation": "Cold HDD (sc1) volumes are designed for infrequently accessed data and provide the lowest cost per GB among EBS volume types.",
        "question_type": "single-choice"
      },
      {
        "id": "Q208",
        "question": "A clustered application running on multiple EC2 instances requires shared block storage that can be concurrently accessed with read/write permissions. Which EBS feature enables this?",
        "options": [
          "EBS Snapshot",
          "EBS Multi-Attach",
          "EBS Volume Encryption",
          "EBS Fast Snapshot Restore",
          "EBS Lifecycle Manager"
        ],
        "correct_answers": [1],
        "explanation": "EBS Multi-Attach allows a single io1 or io2 volume to be attached to multiple instances in the same AZ, enabling shared access.",
        "question_type": "single-choice"
      },
      {
        "id": "Q209",
        "question": "An organization needs a scalable file storage solution that can be mounted concurrently by multiple EC2 instances across multiple availability zones. Which AWS service should they use?",
        "options": [
          "Amazon EBS",
          "Amazon EFS",
          "Amazon S3",
          "Instance Store",
          "AWS Storage Gateway"
        ],
        "correct_answers": [1],
        "explanation": "Amazon EFS is a fully managed NFS file system that can be mounted by multiple EC2 instances across AZs.",
        "question_type": "single-choice"
      },
      {
        "id": "Q210",
        "question": "An application requires highly parallel access to shared data with high aggregate throughput. Which EFS performance mode should be selected?",
        "options": [
          "General Purpose",
          "Max I/O",
          "Provisioned Throughput",
          "Bursting Throughput",
          "Throughput Optimized"
        ],
        "correct_answers": [1],
        "explanation": "Max I/O performance mode is designed for applications requiring high levels of aggregate throughput and parallelism.",
        "question_type": "single-choice"
      },
      {
        "id": "Q211",
        "question": "To reduce storage costs, a company wants to move files that have not been accessed for 60 days to a lower-cost storage class within EFS. Which feature should they use?",
        "options": [
          "EFS Lifecycle Management",
          "EFS Provisioned Throughput",
          "EFS Performance Modes",
          "EFS Multi-AZ",
          "EFS Snapshot"
        ],
        "correct_answers": [0],
        "explanation": "EFS Lifecycle Management can automatically transition files to a lower-cost Infrequent Access (IA) storage class based on the last access time.",
        "question_type": "single-choice"
      },
      {
        "id": "Q212",
        "question": "Which storage service is best suited for sharing files across multiple EC2 instances and automatically scaling storage capacity as needed?",
        "options": [
          "Amazon EBS",
          "Amazon EFS",
          "Instance Store",
          "Amazon S3",
          "Amazon Glacier"
        ],
        "correct_answers": [1],
        "explanation": "Amazon EFS is designed for shared file storage across multiple EC2 instances and scales automatically.",
        "question_type": "single-choice"
      },
      {
        "id": "Q213",
        "question": "A system administrator wants to automate the process of taking EBS snapshots and deleting old ones to manage costs. Which AWS service can help achieve this?",
        "options": [
          "AWS Backup",
          "EBS Snapshot Lifecycle Manager",
          "AWS Lambda",
          "AWS Systems Manager",
          "Amazon Data Lifecycle Manager"
        ],
        "correct_answers": [4],
        "explanation": "Amazon Data Lifecycle Manager can automate the creation and deletion of EBS snapshots according to defined policies.",
        "question_type": "single-choice"
      },
      {
        "id": "Q214",
        "question": "A company needs to ensure that all data stored on EBS volumes is encrypted at rest using AWS Key Management Service (KMS). What is the easiest way to achieve this for new volumes?",
        "options": [
          "Enable EBS encryption by default in the AWS account",
          "Encrypt the volumes manually after creation",
          "Use third-party encryption software",
          "Use encrypted AMIs",
          "Encrypt data at the application level"
        ],
        "correct_answers": [0],
        "explanation": "Enabling EBS encryption by default ensures that all newly created EBS volumes are encrypted using KMS.",
        "question_type": "single-choice"
      },
      {
        "id": "Q215",
        "question": "What happens to the data stored in an instance store volume when the associated EC2 instance is stopped or terminated?",
        "options": [
          "Data is persisted and remains available",
          "Data is lost and cannot be recovered",
          "Data is automatically backed up to S3",
          "Data is converted to an EBS snapshot",
          "Data is encrypted and stored securely"
        ],
        "correct_answers": [1],
        "explanation": "Instance store volumes are ephemeral, and data is lost when the instance stops or terminates.",
        "question_type": "single-choice"
      },
      {
        "id": "Q216",
        "question": "Which EBS volume type provides the lowest cost per GB for workloads requiring infrequent access and where performance is not a key factor?",
        "options": [
          "General Purpose SSD (gp2)",
          "Provisioned IOPS SSD (io1)",
          "Throughput Optimized HDD (st1)",
          "Cold HDD (sc1)",
          "Magnetic"
        ],
        "correct_answers": [3],
        "explanation": "Cold HDD (sc1) offers the lowest cost per GB and is suitable for infrequently accessed data where performance is less critical.",
        "question_type": "single-choice"
      },
      {
        "id": "Q217",
        "question": "Which of the following is a limitation of Amazon EFS compared to Amazon EBS?",
        "options": [
          "EFS cannot be used as a boot volume",
          "EFS volumes cannot be encrypted",
          "EFS is not scalable",
          "EFS cannot be accessed by multiple instances",
          "EFS supports only Windows-based instances"
        ],
        "correct_answers": [0],
        "explanation": "EFS cannot be used as a boot volume; it's designed for shared file storage and cannot be used to boot an operating system.",
        "question_type": "single-choice"
      },
      {
        "id": "Q218",
        "question": "An application running on multiple EC2 instances requires a shared file system that provides POSIX-compliant file access and can be accessed concurrently. Which AWS storage service meets this requirement?",
        "options": [
          "Amazon EBS",
          "Amazon EFS",
          "Amazon S3",
          "Instance Store",
          "AWS Storage Gateway"
        ],
        "correct_answers": [1],
        "explanation": "Amazon EFS provides POSIX-compliant shared file storage that can be accessed concurrently by multiple EC2 instances.",
        "question_type": "single-choice"
      },
      {
        "id": "Q219",
        "question": "Which of the following statements is true regarding the use of EBS and EFS?",
        "options": [
          "EBS volumes can be attached to multiple instances simultaneously",
          "EFS file systems can be mounted on multiple instances across AZs",
          "EFS is only available in a single availability zone",
          "EBS volumes automatically scale in size",
          "EFS does not support encryption at rest"
        ],
        "correct_answers": [1],
        "explanation": "EFS file systems can be mounted concurrently on multiple instances across multiple availability zones.",
        "question_type": "single-choice"
      },
      {
        "id": "Q220",
        "question": "A company wants to improve the performance of an existing EBS volume attached to an EC2 instance. Which action can help achieve this without downtime?",
        "options": [
          "Change the volume type to one with higher performance",
          "Detach the volume and attach a new one",
          "Take a snapshot and restore it to a new volume",
          "Increase the instance size",
          "Create a RAID configuration"
        ],
        "correct_answers": [0],
        "explanation": "You can modify the volume type of an EBS volume to improve performance without detaching it, and the change happens without downtime.",
        "question_type": "single-choice"
      },
      {
        "id": "Q221",
        "question": "A company needs to ensure that new EBS volumes created from snapshots are fully initialized and provide maximum performance from the first use. Which feature should they use?",
        "options": [
          "EBS Fast Snapshot Restore",
          "EBS Encryption",
          "EBS Multi-Attach",
          "EBS Volume Modifications",
          "EBS Lifecycle Manager"
        ],
        "correct_answers": [0],
        "explanation": "EBS Fast Snapshot Restore enables fully initialized volumes that deliver full performance from the moment they are attached.",
        "question_type": "single-choice"
      },
      {
        "id": "Q222",
        "question": "An application with unpredictable workloads requires EFS throughput to automatically adjust based on actual usage. Which throughput mode should be used?",
        "options": [
          "Bursting Throughput",
          "Provisioned Throughput",
          "Elastic Throughput",
          "Max I/O Performance",
          "General Purpose Performance"
        ],
        "correct_answers": [2],
        "explanation": "Elastic Throughput mode automatically scales throughput up or down based on the workload, ideal for unpredictable workloads.",
        "question_type": "single-choice"
      },
      {
        "id": "Q223",
        "question": "Which EBS volume types allow you to increase the IOPS independently of the volume size?",
        "options": [
          "General Purpose SSD (gp2)",
          "Provisioned IOPS SSD (io1 and io2)",
          "Throughput Optimized HDD (st1)",
          "Cold HDD (sc1)",
          "Magnetic"
        ],
        "correct_answers": [1],
        "explanation": "Provisioned IOPS SSD (io1 and io2) volumes allow you to provision IOPS independently of the volume size.",
        "question_type": "single-choice"
      },
      {
        "id": "Q224",
        "question": "Which of the following is a characteristic of Instance Store volumes?",
        "options": [
          "Data persists after instance stop or termination",
          "They can be detached and attached to other instances",
          "They provide high I/O performance for temporary storage",
          "They support encryption at rest using KMS",
          "They can be resized dynamically"
        ],
        "correct_answers": [2],
        "explanation": "Instance Store volumes provide high I/O performance and are ideal for temporary storage such as caches or buffers.",
        "question_type": "single-choice"
      },
      {
        "id": "Q225",
        "question": "How can you move an EBS volume from one availability zone to another?",
        "options": [
          "Detach it and attach it to an instance in the other AZ",
          "Take a snapshot of the volume and restore it in the desired AZ",
          "Use AWS DataSync to transfer the data",
          "Change the volume's AZ in the AWS console",
          "It's not possible to move an EBS volume across AZs"
        ],
        "correct_answers": [1],
        "explanation": "To move an EBS volume across AZs, you must create a snapshot of it and then restore the snapshot in the target AZ.",
        "question_type": "single-choice"
      }
   ,
      {
        "id": "Q226",
        "question": "What does vertical scalability mean in the context of AWS EC2 instances?",
        "options": [
          "Increasing the number of instances",
          "Decreasing the size of the instances",
          "Increasing the size of the instances",
          "Distributing load across multiple regions",
          "Implementing high availability across zones"
        ],
        "correct_answers": [2],
        "explanation": "Vertical scalability involves increasing the size (e.g., CPU, memory) of an instance to handle greater loads.",
        "question_type": "single-choice"
      },
      {
        "id": "Q227",
        "question": "Which AWS service is specifically designed to automatically scale out or in based on demand?",
        "options": [
          "Amazon EC2 Auto Scaling Group",
          "AWS Lambda",
          "Amazon S3",
          "AWS Elastic Beanstalk",
          "Amazon RDS"
        ],
        "correct_answers": [0],
        "explanation": "An Auto Scaling Group automatically adjusts the number of EC2 instances to handle the load.",
        "question_type": "single-choice"
      },
      {
        "id": "Q228",
        "question": "What is the primary purpose of an Elastic Load Balancer in AWS?",
        "options": [
          "To store and retrieve data",
          "To distribute incoming traffic across multiple targets",
          "To manage DNS records",
          "To provide content delivery",
          "To monitor application performance"
        ],
        "correct_answers": [1],
        "explanation": "An Elastic Load Balancer distributes incoming application traffic across multiple targets, such as EC2 instances.",
        "question_type": "single-choice"
      },
      {
        "id": "Q229",
        "question": "Which type of scaling involves increasing the number of instances to handle increased load?",
        "options": [
          "Vertical Scaling",
          "Horizontal Scaling",
          "Diagonal Scaling",
          "Proportional Scaling",
          "Asynchronous Scaling"
        ],
        "correct_answers": [1],
        "explanation": "Horizontal scaling involves adding more instances to distribute the load across multiple servers.",
        "question_type": "single-choice"
      },
      {
        "id": "Q230",
        "question": "What is the difference between scalability and high availability?",
        "options": [
          "Scalability is about handling increased load; high availability is about minimizing downtime",
          "Scalability is about minimizing downtime; high availability is about handling increased load",
          "They are the same concept",
          "Scalability focuses on cost reduction; high availability focuses on performance",
          "High availability is a subset of scalability"
        ],
        "correct_answers": [0],
        "explanation": "Scalability ensures that the system can handle increased load, while high availability ensures that the system is operational with minimal downtime.",
        "question_type": "single-choice"
      },
      {
        "id": "Q231",
        "question": "An Auto Scaling Group has a minimum size of 2, desired capacity of 4, and maximum size of 6. What happens when CPU utilization increases significantly?",
        "options": [
          "Nothing changes since the desired capacity is met",
          "The Auto Scaling Group scales out up to 6 instances",
          "The Auto Scaling Group scales out beyond 6 instances",
          "The Auto Scaling Group scales in to 2 instances",
          "The Auto Scaling Group terminates all instances"
        ],
        "correct_answers": [1],
        "explanation": "The Auto Scaling Group can scale out up to the maximum size, which is 6 instances in this case.",
        "question_type": "single-choice"
      },
      {
        "id": "Q232",
        "question": "Which AWS Load Balancer operates at Layer 7 and supports path-based routing?",
        "options": [
          "Classic Load Balancer",
          "Application Load Balancer",
          "Network Load Balancer",
          "Gateway Load Balancer",
          "HTTP Load Balancer"
        ],
        "correct_answers": [1],
        "explanation": "Application Load Balancer operates at Layer 7 and supports advanced routing features like path-based routing.",
        "question_type": "single-choice"
      },
      {
        "id": "Q233",
        "question": "An application requires extremely low latency TCP connections and needs to handle millions of requests per second. Which Load Balancer should be used?",
        "options": [
          "Classic Load Balancer",
          "Application Load Balancer",
          "Network Load Balancer",
          "Gateway Load Balancer",
          "Elastic Load Balancer"
        ],
        "correct_answers": [2],
        "explanation": "Network Load Balancer operates at Layer 4 and is designed for extreme performance, handling millions of requests per second with ultra-low latency.",
        "question_type": "single-choice"
      },
      {
        "id": "Q234",
        "question": "What is the purpose of health checks in a Load Balancer configuration?",
        "options": [
          "To verify the Load Balancer's own health",
          "To monitor the client's health",
          "To determine if instances are available to receive traffic",
          "To encrypt data in transit",
          "To manage DNS records"
        ],
        "correct_answers": [2],
        "explanation": "Health checks allow the Load Balancer to know if instances it forwards traffic to are available to handle requests.",
        "question_type": "single-choice"
      },
      {
        "id": "Q235",
        "question": "Which AWS service can distribute incoming traffic to multiple targets in multiple Availability Zones, enhancing high availability?",
        "options": [
          "Amazon Route 53",
          "AWS Auto Scaling",
          "Elastic Load Balancer",
          "AWS CloudFront",
          "Amazon VPC"
        ],
        "correct_answers": [2],
        "explanation": "Elastic Load Balancer distributes incoming application traffic across multiple targets in multiple Availability Zones.",
        "question_type": "single-choice"
      },
      {
        "id": "Q236",
        "question": "What is the main advantage of using AWS-managed Load Balancers over self-managed ones?",
        "options": [
          "Lower cost",
          "More control over configurations",
          "Less maintenance effort and built-in high availability",
          "Support for more protocols",
          "Integration with on-premises resources"
        ],
        "correct_answers": [2],
        "explanation": "AWS-managed Load Balancers reduce maintenance effort, as AWS handles upgrades and high availability.",
        "question_type": "single-choice"
      },
      {
        "id": "Q237",
        "question": "An organization needs to handle web traffic that uses both HTTP and WebSocket protocols. Which Load Balancer is appropriate?",
        "options": [
          "Classic Load Balancer",
          "Application Load Balancer",
          "Network Load Balancer",
          "Gateway Load Balancer",
          "Elastic Load Balancer"
        ],
        "correct_answers": [1],
        "explanation": "Application Load Balancer supports HTTP, HTTPS, and WebSocket protocols.",
        "question_type": "single-choice"
      },
      {
        "id": "Q238",
        "question": "How does Cross-Zone Load Balancing improve the distribution of traffic?",
        "options": [
          "By routing traffic to instances in the same zone only",
          "By evenly distributing traffic across all instances in all zones",
          "By prioritizing traffic to the closest zone",
          "By reducing the number of health checks",
          "By encrypting traffic between zones"
        ],
        "correct_answers": [1],
        "explanation": "Cross-Zone Load Balancing allows the Load Balancer to evenly distribute traffic across all registered instances in all Availability Zones.",
        "question_type": "single-choice"
      },
      {
        "id": "Q239",
        "question": "Which Load Balancer supports assigning Elastic IP addresses per Availability Zone?",
        "options": [
          "Classic Load Balancer",
          "Application Load Balancer",
          "Network Load Balancer",
          "Gateway Load Balancer",
          "Elastic Load Balancer"
        ],
        "correct_answers": [2],
        "explanation": "Network Load Balancer supports static IP addresses and allows assigning Elastic IPs per Availability Zone.",
        "question_type": "single-choice"
      },
      {
        "id": "Q240",
        "question": "What is the function of 'Sticky Sessions' in Load Balancing?",
        "options": [
          "To encrypt sessions between client and server",
          "To ensure a client is always redirected to the same instance",
          "To balance the load more efficiently",
          "To manage SSL certificates",
          "To provide multi-region failover"
        ],
        "correct_answers": [1],
        "explanation": "Sticky Sessions (Session Affinity) ensure that the same client is always redirected to the same instance for consistent session data.",
        "question_type": "single-choice"
      },
      {
        "id": "Q241",
        "question": "Which protocol must clients support to use multiple SSL certificates with a single Load Balancer?",
        "options": [
          "TLS 1.0",
          "SSL 3.0",
          "Server Name Indication (SNI)",
          "HTTP/2",
          "WebSocket"
        ],
        "correct_answers": [2],
        "explanation": "Server Name Indication (SNI) allows multiple SSL certificates to be associated with a single Load Balancer by including the hostname in the initial SSL handshake.",
        "question_type": "single-choice"
      },
      {
        "id": "Q242",
        "question": "An organization needs to route traffic based on both the hostname and path in the URL. Which Load Balancer feature enables this?",
        "options": [
          "Cross-Zone Load Balancing",
          "Sticky Sessions",
          "Advanced Request Routing",
          "SSL Termination",
          "Connection Draining"
        ],
        "correct_answers": [2],
        "explanation": "Advanced Request Routing in Application Load Balancer allows routing based on hostname, path, query strings, and headers.",
        "question_type": "single-choice"
      },
      {
        "id": "Q243",
        "question": "Which scaling policy allows you to maintain an average CPU utilization across your Auto Scaling Group instances at a specific percentage?",
        "options": [
          "Simple Scaling",
          "Step Scaling",
          "Target Tracking Scaling",
          "Scheduled Scaling",
          "Predictive Scaling"
        ],
        "correct_answers": [2],
        "explanation": "Target Tracking Scaling allows you to specify a target value for a specific metric, like average CPU utilization, and automatically adjusts capacity to maintain it.",
        "question_type": "single-choice"
      },
      {
        "id": "Q244",
        "question": "What is the primary purpose of the cooldown period in an Auto Scaling Group?",
        "options": [
          "To prevent scaling activities during maintenance",
          "To allow metrics to stabilize before another scaling activity",
          "To cool down the instances physically",
          "To save costs by pausing instances",
          "To update the launch template"
        ],
        "correct_answers": [1],
        "explanation": "The cooldown period allows metrics to stabilize after a scaling activity, preventing unnecessary additional scaling actions.",
        "question_type": "single-choice"
      },
      {
        "id": "Q245",
        "question": "Which Load Balancer type operates at Layer 4 and supports both TCP and UDP protocols?",
        "options": [
          "Classic Load Balancer",
          "Application Load Balancer",
          "Network Load Balancer",
          "Gateway Load Balancer",
          "Transport Load Balancer"
        ],
        "correct_answers": [2],
        "explanation": "Network Load Balancer operates at Layer 4 and supports both TCP and UDP protocols.",
        "question_type": "single-choice"
      },
      {
        "id": "Q246",
        "question": "What is Connection Draining (also known as Deregistration Delay) in the context of Load Balancers?",
        "options": [
          "A method to redirect traffic to healthy instances",
          "A feature to gracefully terminate existing connections while deregistering an instance",
          "A way to encrypt data in transit",
          "A load balancing algorithm",
          "A mechanism to increase connection speed"
        ],
        "correct_answers": [1],
        "explanation": "Connection Draining allows in-flight requests to complete while the instance is being deregistered or becomes unhealthy.",
        "question_type": "single-choice"
      },
      {
        "id": "Q247",
        "question": "An application requires processing IP packets without modification at the network layer. Which Load Balancer should be used?",
        "options": [
          "Classic Load Balancer",
          "Application Load Balancer",
          "Network Load Balancer",
          "Gateway Load Balancer",
          "Elastic Load Balancer"
        ],
        "correct_answers": [3],
        "explanation": "Gateway Load Balancer operates at Layer 3 (Network Layer) and forwards IP packets without modification, suitable for third-party virtual appliances.",
        "question_type": "single-choice"
      },
      {
        "id": "Q248",
        "question": "Which feature allows an Auto Scaling Group to replace instances with new ones based on an updated launch template?",
        "options": [
          "Scaling Policies",
          "Instance Refresh",
          "Scheduled Scaling",
          "Lifecycle Hooks",
          "Termination Policies"
        ],
        "correct_answers": [1],
        "explanation": "Instance Refresh allows you to update the instances in an Auto Scaling Group to use a new launch template.",
        "question_type": "single-choice"
      },
      {
        "id": "Q249",
        "question": "Which of the following is a key benefit of using Auto Scaling Groups?",
        "options": [
          "Manual control over the number of instances",
          "Automatic scaling based on demand",
          "Fixed cost regardless of usage",
          "Improved database performance",
          "Enhanced network security"
        ],
        "correct_answers": [1],
        "explanation": "Auto Scaling Groups automatically adjust the number of instances to meet demand, improving scalability and cost efficiency.",
        "question_type": "single-choice"
      },
      {
        "id": "Q250",
        "question": "How can you ensure that new EC2 instances launched by an Auto Scaling Group are registered with an Elastic Load Balancer?",
        "options": [
          "Manually register instances with the Load Balancer",
          "Configure the Auto Scaling Group to integrate with the Load Balancer",
          "Use a Lambda function to add instances",
          "Instances are registered automatically without configuration",
          "It's not possible to register instances automatically"
        ],
        "correct_answers": [1],
        "explanation": "You can configure the Auto Scaling Group to automatically register new instances with a specified Load Balancer.",
        "question_type": "single-choice"
      },
      {
        "id": "Q251",
        "question": "What is the primary use case for vertical scaling in AWS services?",
        "options": [
          "Distributed systems requiring multiple instances",
          "Databases needing more CPU or memory",
          "Web applications handling variable traffic",
          "Reducing the number of instances",
          "Implementing high availability"
        ],
        "correct_answers": [1],
        "explanation": "Vertical scaling is commonly used for non-distributed systems like databases that require more CPU or memory.",
        "question_type": "single-choice"
      },
      {
        "id": "Q252",
        "question": "Which AWS service can automatically replace unhealthy EC2 instances in an Auto Scaling Group?",
        "options": [
          "AWS Elastic Beanstalk",
          "AWS CloudFormation",
          "AWS Auto Scaling",
          "Amazon CloudWatch",
          "AWS Config"
        ],
        "correct_answers": [2],
        "explanation": "AWS Auto Scaling monitors the health of instances and can automatically replace unhealthy ones.",
        "question_type": "single-choice"
      },
      {
        "id": "Q253",
        "question": "In the context of Load Balancers, what does SSL Termination refer to?",
        "options": [
          "Encrypting data at rest",
          "Ending SSL support",
          "Decrypting SSL traffic at the Load Balancer",
          "Establishing an SSL connection between client and server",
          "Passing encrypted traffic to backend instances"
        ],
        "correct_answers": [2],
        "explanation": "SSL Termination involves decrypting SSL-encrypted traffic at the Load Balancer, reducing the load on backend instances.",
        "question_type": "single-choice"
      },
      {
        "id": "Q254",
        "question": "Which AWS service provides certificates for use with AWS services like Load Balancers, and handles renewal automatically?",
        "options": [
          "AWS Certificate Manager (ACM)",
          "AWS Key Management Service (KMS)",
          "AWS Identity and Access Management (IAM)",
          "AWS Secrets Manager",
          "Amazon CloudFront"
        ],
        "correct_answers": [0],
        "explanation": "AWS Certificate Manager (ACM) allows you to provision, manage, and deploy SSL/TLS certificates for use with AWS services.",
        "question_type": "single-choice"
      },
      {
        "id": "Q255",
        "question": "An application requires that the client's IP address is preserved when using a Load Balancer. Which header contains the client's IP address when using an Application Load Balancer?",
        "options": [
          "X-Forwarded-For",
          "X-Client-IP",
          "X-Real-IP",
          "Client-IP",
          "Forwarded-IP"
        ],
        "correct_answers": [0],
        "explanation": "The client's IP address is available in the 'X-Forwarded-For' header when using an Application Load Balancer.",
        "question_type": "single-choice"
      },
      {
        "id": "Q256",
        "question": "Which scaling strategy involves scheduling scaling actions based on predictable load changes?",
        "options": [
          "Target Tracking Scaling",
          "Simple Scaling",
          "Step Scaling",
          "Scheduled Scaling",
          "Predictive Scaling"
        ],
        "correct_answers": [3],
        "explanation": "Scheduled Scaling allows you to scale based on a schedule, anticipating changes in load.",
        "question_type": "single-choice"
      },
      {
        "id": "Q257",
        "question": "What is the default behavior of an Auto Scaling Group when an instance becomes unhealthy?",
        "options": [
          "It does nothing",
          "It terminates the unhealthy instance and launches a new one",
          "It replaces the instance after 24 hours",
          "It stops the instance",
          "It sends an alert but takes no action"
        ],
        "correct_answers": [1],
        "explanation": "By default, the Auto Scaling Group will terminate the unhealthy instance and replace it to maintain the desired capacity.",
        "question_type": "single-choice"
      },
      {
        "id": "Q258",
        "question": "Which AWS service can be used to distribute traffic across multiple regions for disaster recovery and high availability?",
        "options": [
          "Elastic Load Balancer",
          "Amazon Route 53",
          "AWS Global Accelerator",
          "Amazon CloudFront",
          "AWS Direct Connect"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Route 53 is a DNS service that can route traffic across multiple regions for disaster recovery and high availability.",
        "question_type": "single-choice"
      },
      {
        "id": "Q259",
        "question": "Which Load Balancer supports WebSockets and HTTP/2 protocols?",
        "options": [
          "Classic Load Balancer",
          "Application Load Balancer",
          "Network Load Balancer",
          "Gateway Load Balancer",
          "Elastic Load Balancer"
        ],
        "correct_answers": [1],
        "explanation": "Application Load Balancer supports advanced protocols like WebSockets and HTTP/2.",
        "question_type": "single-choice"
      },
      {
        "id": "Q260",
        "question": "How does an Auto Scaling Group determine when to scale out or scale in?",
        "options": [
          "Based on predefined schedules only",
          "Manually triggered by the user",
          "Using scaling policies and CloudWatch metrics",
          "It randomly adjusts capacity",
          "Based on the number of users logged in"
        ],
        "correct_answers": [2],
        "explanation": "An Auto Scaling Group uses scaling policies tied to CloudWatch metrics to decide when to scale out or in.",
        "question_type": "single-choice"
      },
      {
        "id": "Q261",
        "question": "What is a Launch Template in the context of an Auto Scaling Group?",
        "options": [
          "A script that runs when the instance starts",
          "A configuration that defines instance settings",
          "A backup of an EC2 instance",
          "A way to schedule scaling actions",
          "An IAM policy for EC2 instances"
        ],
        "correct_answers": [1],
        "explanation": "A Launch Template specifies the AMI, instance type, key pair, security groups, and other instance settings for the Auto Scaling Group.",
        "question_type": "single-choice"
      },
      {
        "id": "Q262",
        "question": "Which AWS service can help you analyze and optimize the costs associated with your Auto Scaling Groups?",
        "options": [
          "AWS Cost Explorer",
          "AWS Trusted Advisor",
          "AWS CloudTrail",
          "AWS Config",
          "Amazon CloudWatch"
        ],
        "correct_answers": [0],
        "explanation": "AWS Cost Explorer provides insights into your AWS costs and usage patterns, helping you optimize costs.",
        "question_type": "single-choice"
      },
      {
        "id": "Q263",
        "question": "Which Auto Scaling Group scaling policy adjusts the number of instances based on predictive analytics?",
        "options": [
          "Target Tracking Scaling",
          "Simple Scaling",
          "Step Scaling",
          "Scheduled Scaling",
          "Predictive Scaling"
        ],
        "correct_answers": [4],
        "explanation": "Predictive Scaling uses machine learning to predict future traffic and adjusts capacity accordingly.",
        "question_type": "single-choice"
      },
      {
        "id": "Q264",
        "question": "What is the maximum number of instances that can be scaled using an Auto Scaling Group?",
        "options": [
          "There is no limit",
          "10 instances",
          "100 instances",
          "Based on the maximum capacity setting",
          "Based on the minimum capacity setting"
        ],
        "correct_answers": [3],
        "explanation": "The maximum number of instances is determined by the 'maximum capacity' setting in the Auto Scaling Group configuration.",
        "question_type": "single-choice"
      },
      {
        "id": "Q265",
        "question": "An application requires sticky sessions with custom session cookies. Which Load Balancer supports application-based cookies?",
        "options": [
          "Classic Load Balancer",
          "Application Load Balancer",
          "Network Load Balancer",
          "Gateway Load Balancer",
          "Elastic Load Balancer"
        ],
        "correct_answers": [1],
        "explanation": "Application Load Balancer supports application-based cookies, allowing custom cookie configurations.",
        "question_type": "single-choice"
      },
      {
        "id": "Q266",
        "question": "Which feature of Auto Scaling Groups allows you to define how instances are terminated when scaling in?",
        "options": [
          "Scaling Policies",
          "Termination Policies",
          "Lifecycle Hooks",
          "Instance Refresh",
          "Cooldown Period"
        ],
        "correct_answers": [1],
        "explanation": "Termination Policies allow you to define how Auto Scaling selects instances for termination when scaling in.",
        "question_type": "single-choice"
      },
      {
        "id": "Q267",
        "question": "Which AWS service integrates with Auto Scaling Groups to provide application-level health checks?",
        "options": [
          "Amazon CloudWatch",
          "AWS Lambda",
          "Elastic Load Balancer",
          "AWS Config",
          "AWS Trusted Advisor"
        ],
        "correct_answers": [2],
        "explanation": "Elastic Load Balancer performs health checks and can inform the Auto Scaling Group about the health of instances.",
        "question_type": "single-choice"
      },
      {
        "id": "Q268",
        "question": "An Auto Scaling Group uses a Launch Template that specifies an AMI with outdated software. What is the best way to update the instances?",
        "options": [
          "Manually update the software on each instance",
          "Create a new Launch Template version with the updated AMI and use Instance Refresh",
          "Terminate all instances; they will automatically be replaced",
          "Change the Auto Scaling Group's desired capacity",
          "Use AWS Systems Manager to update the instances"
        ],
        "correct_answers": [1],
        "explanation": "Creating a new Launch Template version and using Instance Refresh allows you to update instances without downtime.",
        "question_type": "single-choice"
      },
      {
        "id": "Q269",
        "question": "Which header is used to retrieve the protocol (HTTP or HTTPS) used by the client in a request passing through an Application Load Balancer?",
        "options": [
          "X-Forwarded-For",
          "X-Forwarded-Proto",
          "X-Forwarded-Port",
          "X-Client-Proto",
          "X-Real-Proto"
        ],
        "correct_answers": [1],
        "explanation": "The 'X-Forwarded-Proto' header contains the protocol used by the client.",
        "question_type": "single-choice"
      },
      {
        "id": "Q270",
        "question": "Which Load Balancer supports path-based routing to route requests to different target groups based on the URL path?",
        "options": [
          "Classic Load Balancer",
          "Application Load Balancer",
          "Network Load Balancer",
          "Gateway Load Balancer",
          "Elastic Load Balancer"
        ],
        "correct_answers": [1],
        "explanation": "Application Load Balancer supports advanced routing features like path-based routing.",
        "question_type": "single-choice"
      },
      {
        "id": "Q271",
        "question": "An application needs to distribute UDP traffic across multiple instances. Which Load Balancer should be used?",
        "options": [
          "Classic Load Balancer",
          "Application Load Balancer",
          "Network Load Balancer",
          "Gateway Load Balancer",
          "Elastic Load Balancer"
        ],
        "correct_answers": [2],
        "explanation": "Network Load Balancer supports both TCP and UDP protocols.",
        "question_type": "single-choice"
      },
      {
        "id": "Q272",
        "question": "Which Auto Scaling Group scaling policy should be used when you need to add or remove a specific number of instances based on a condition?",
        "options": [
          "Target Tracking Scaling",
          "Simple Scaling",
          "Step Scaling",
          "Scheduled Scaling",
          "Predictive Scaling"
        ],
        "correct_answers": [2],
        "explanation": "Step Scaling allows you to define scaling adjustments that vary based on the size of the alarm breach.",
        "question_type": "single-choice"
      },
      {
        "id": "Q273",
        "question": "Which of the following is NOT a valid target type for an Application Load Balancer's target group?",
        "options": [
          "EC2 instances",
          "IP addresses",
          "Lambda functions",
          "On-premises servers with public IPs",
          "Amazon S3 buckets"
        ],
        "correct_answers": [4],
        "explanation": "Application Load Balancer cannot route traffic directly to Amazon S3 buckets.",
        "question_type": "single-choice"
      },
      {
        "id": "Q274",
        "question": "What is the benefit of using an Elastic Load Balancer in front of your Auto Scaling Group?",
        "options": [
          "To encrypt data at rest",
          "To distribute incoming traffic across healthy instances",
          "To automatically scale instances up and down",
          "To manage DNS records",
          "To monitor application performance"
        ],
        "correct_answers": [1],
        "explanation": "An Elastic Load Balancer distributes incoming traffic across healthy instances in the Auto Scaling Group.",
        "question_type": "single-choice"
      },
      {
        "id": "Q275",
        "question": "Which AWS service can help you predict future traffic for your Auto Scaling Group to scale proactively?",
        "options": [
          "Amazon Forecast",
          "AWS Auto Scaling with Predictive Scaling",
          "AWS Machine Learning",
          "Amazon SageMaker",
          "AWS CloudWatch"
        ],
        "correct_answers": [1],
        "explanation": "AWS Auto Scaling with Predictive Scaling uses machine learning to forecast traffic and adjust capacity in advance.",
        "question_type": "single-choice"
      }
   ,
      {
        "id": "Q276",
        "question": "What is the primary function of the Domain Name System (DNS) in networking?",
        "options": [
          "Translating human-friendly hostnames into IP addresses",
          "Providing secure communication between servers",
          "Storing data in the cloud",
          "Monitoring network traffic",
          "Encrypting data at rest"
        ],
        "correct_answers": [0],
        "explanation": "DNS translates human-friendly domain names into machine-friendly IP addresses, enabling users to access websites using names instead of numerical IP addresses.",
        "question_type": "single-choice"
      },
      {
        "id": "Q277",
        "question": "Which AWS service provides a highly available and scalable authoritative DNS solution?",
        "options": [
          "Amazon Route 53",
          "Amazon EC2",
          "AWS Lambda",
          "Amazon S3",
          "AWS CloudFormation"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Route 53 is a highly available and scalable authoritative DNS service provided by AWS.",
        "question_type": "single-choice"
      },
      {
        "id": "Q278",
        "question": "In DNS terminology, what does TLD stand for?",
        "options": [
          "Top Level Domain",
          "Transfer Level Data",
          "Total Load Distribution",
          "Technical Location Descriptor",
          "Terminal Link Device"
        ],
        "correct_answers": [0],
        "explanation": "TLD stands for Top Level Domain, such as .com, .org, .net, which are the highest level in the DNS hierarchy.",
        "question_type": "single-choice"
      },
      {
        "id": "Q279",
        "question": "Which DNS record type maps a hostname to an IPv4 address?",
        "options": [
          "A",
          "AAAA",
          "CNAME",
          "NS",
          "MX"
        ],
        "correct_answers": [0],
        "explanation": "An A record maps a hostname to an IPv4 address.",
        "question_type": "single-choice"
      },
      {
        "id": "Q280",
        "question": "Which Route 53 record type is used to map a hostname to another hostname and cannot be used at the zone apex?",
        "options": [
          "A",
          "AAAA",
          "CNAME",
          "NS",
          "TXT"
        ],
        "correct_answers": [2],
        "explanation": "A CNAME record maps a hostname to another hostname and cannot be used at the zone apex (the root domain).",
        "question_type": "single-choice"
      },
      {
        "id": "Q281",
        "question": "What is the purpose of an NS (Name Server) record in DNS?",
        "options": [
          "To map a hostname to an IP address",
          "To specify the authoritative name servers for a domain",
          "To provide email exchange server information",
          "To store text-based information",
          "To define alias names for a domain"
        ],
        "correct_answers": [1],
        "explanation": "NS records specify the authoritative name servers for a domain, indicating where DNS queries should be directed.",
        "question_type": "single-choice"
      },
      {
        "id": "Q282",
        "question": "In Amazon Route 53, what is a Hosted Zone?",
        "options": [
          "A container for records that define how to route traffic to a domain",
          "A physical data center",
          "An AWS region",
          "A type of EC2 instance",
          "A method for securing VPCs"
        ],
        "correct_answers": [0],
        "explanation": "A Hosted Zone is a container in Route 53 that holds DNS records for a specific domain and defines how traffic is routed.",
        "question_type": "single-choice"
      },
      {
        "id": "Q283",
        "question": "Which of the following is NOT a type of Route 53 routing policy?",
        "options": [
          "Simple",
          "Weighted",
          "Latency-based",
          "Geolocation",
          "Round Robin"
        ],
        "correct_answers": [4],
        "explanation": "Round Robin is not a specific Route 53 routing policy. However, Simple routing can behave like Round Robin by returning multiple values.",
        "question_type": "single-choice"
      },
      {
        "id": "Q284",
        "question": "Which routing policy should you use in Route 53 if you want to route traffic to the closest region based on network latency?",
        "options": [
          "Geolocation Routing",
          "Latency-based Routing",
          "Weighted Routing",
          "Failover Routing",
          "Simple Routing"
        ],
        "correct_answers": [1],
        "explanation": "Latency-based Routing directs traffic to the region that provides the lowest network latency for the client.",
        "question_type": "single-choice"
      },
      {
        "id": "Q285",
        "question": "What is the main difference between CNAME and Alias records in Route 53?",
        "options": [
          "CNAME records can point to AWS resources; Alias records cannot",
          "Alias records can point to AWS resources and are not charged for queries",
          "CNAME records can be used for the root domain; Alias records cannot",
          "Alias records can point to external domains; CNAME records cannot",
          "There is no difference between CNAME and Alias records"
        ],
        "correct_answers": [1],
        "explanation": "Alias records in Route 53 can point to AWS resources, work for root and non-root domains, and are free of charge for DNS queries.",
        "question_type": "single-choice"
      },
      {
        "id": "Q286",
        "question": "Which AWS resources can be targets for Alias records in Route 53?",
        "options": [
          "Amazon S3 buckets configured as websites",
          "Elastic Load Balancers",
          "Amazon CloudFront distributions",
          "API Gateways",
          "All of the above"
        ],
        "correct_answers": [4],
        "explanation": "Alias records can point to various AWS resources, including S3 websites, ELBs, CloudFront distributions, API Gateways, and more.",
        "question_type": "single-choice"
      },
      {
        "id": "Q287",
        "question": "What is the default Time To Live (TTL) for a DNS record in Route 53 if not specified?",
        "options": [
          "0 seconds",
          "300 seconds",
          "3600 seconds",
          "86400 seconds",
          "TTL must be specified for each record"
        ],
        "correct_answers": [4],
        "explanation": "TTL must be specified for each DNS record in Route 53 unless it's an Alias record, which uses the default TTL of the AWS resource.",
        "question_type": "single-choice"
      },
      {
        "id": "Q288",
        "question": "Which Route 53 routing policy allows you to specify a percentage of traffic to be routed to different resources?",
        "options": [
          "Weighted Routing",
          "Latency-based Routing",
          "Failover Routing",
          "Geolocation Routing",
          "Simple Routing"
        ],
        "correct_answers": [0],
        "explanation": "Weighted Routing allows you to assign weights to resources, controlling the percentage of traffic directed to each resource.",
        "question_type": "single-choice"
      },
      {
        "id": "Q289",
        "question": "Which routing policy in Route 53 would you use to implement an active-passive failover configuration?",
        "options": [
          "Simple Routing",
          "Failover Routing",
          "Weighted Routing",
          "Latency-based Routing",
          "Geolocation Routing"
        ],
        "correct_answers": [1],
        "explanation": "Failover Routing is used to configure active-passive failover, directing traffic to a primary resource unless it becomes unhealthy.",
        "question_type": "single-choice"
      },
      {
        "id": "Q290",
        "question": "In the context of Route 53, what is a health check used for?",
        "options": [
          "To authenticate users accessing AWS resources",
          "To monitor the health of endpoints and route traffic accordingly",
          "To check the performance of DNS queries",
          "To secure DNS records with encryption",
          "To manage domain registration"
        ],
        "correct_answers": [1],
        "explanation": "Health checks monitor the health of endpoints (e.g., web servers) and allow Route 53 to route traffic away from unhealthy resources.",
        "question_type": "single-choice"
      },
      {
        "id": "Q291",
        "question": "Which type of health check in Route 53 can monitor the status of CloudWatch alarms?",
        "options": [
          "Calculated Health Checks",
          "Endpoint Health Checks",
          "CloudWatch Alarms cannot be monitored by Route 53",
          "CloudWatch Health Checks",
          "Metric-based Health Checks"
        ],
        "correct_answers": [4],
        "explanation": "Metric-based Health Checks in Route 53 can monitor the status of CloudWatch alarms, allowing for flexible health checking based on metrics.",
        "question_type": "single-choice"
      },
      {
        "id": "Q292",
        "question": "What is a private hosted zone in Route 53 used for?",
        "options": [
          "Managing DNS records for public domains",
          "Routing traffic within one or more VPCs using private domain names",
          "Encrypting DNS queries",
          "Hosting websites on AWS",
          "Connecting to on-premises networks"
        ],
        "correct_answers": [1],
        "explanation": "A private hosted zone contains records that specify how to route traffic within one or more VPCs using private domain names.",
        "question_type": "single-choice"
      },
      {
        "id": "Q293",
        "question": "Which of the following statements is true regarding Alias records in Route 53?",
        "options": [
          "They can point to any external DNS name",
          "They are only used for root domains",
          "They can point to specific AWS resources and are free of charge",
          "They cannot be used with CloudFront distributions",
          "They must have a TTL specified"
        ],
        "correct_answers": [2],
        "explanation": "Alias records can point to AWS resources, can be used for root and non-root domains, and are free of charge.",
        "question_type": "single-choice"
      },
      {
        "id": "Q294",
        "question": "What is the primary purpose of an Internet Gateway in a VPC?",
        "options": [
          "To allow instances in a VPC to connect to the Internet",
          "To connect multiple VPCs together",
          "To provide DNS resolution",
          "To encrypt network traffic",
          "To store data in the cloud"
        ],
        "correct_answers": [0],
        "explanation": "An Internet Gateway allows instances in a VPC to connect to the Internet and receive connections from the Internet.",
        "question_type": "single-choice"
      },
      {
        "id": "Q295",
        "question": "In a VPC, what is the primary function of a NAT Gateway?",
        "options": [
          "To route traffic between VPCs",
          "To allow instances in private subnets to access the Internet",
          "To enforce security policies",
          "To provide domain name services",
          "To connect to on-premises networks"
        ],
        "correct_answers": [1],
        "explanation": "A NAT Gateway enables instances in private subnets to initiate outbound Internet traffic while preventing inbound connections from the Internet.",
        "question_type": "single-choice"
      },
      {
        "id": "Q296",
        "question": "Which VPC component acts as a firewall at the subnet level?",
        "options": [
          "Security Group",
          "Network Access Control List (NACL)",
          "Internet Gateway",
          "Route Table",
          "VPC Endpoint"
        ],
        "correct_answers": [1],
        "explanation": "A Network Access Control List (NACL) is a stateless firewall that operates at the subnet level, controlling inbound and outbound traffic.",
        "question_type": "single-choice"
      },
      {
            "id": "Q297",
            "question": "What is the difference between Security Groups and Network ACLs in a VPC?",
            "options": [
                "Security Groups are stateful; Network ACLs are stateless",
                "Security Groups are stateless; Network ACLs are stateful",
                "Both are stateless",
                "Both are stateful",
                "Security Groups control subnet traffic; Network ACLs control instance traffic"
            ],
            "correct_answers": [0],
            "explanation": "Security Groups are stateful, meaning they track connections and automatically allow return traffic. Network ACLs are stateless and evaluate each request individually.",
            "question_type": "single-choice"
        },
        {
            "id": "Q298",
            "question": "Which of the following statements about VPC Peering is true?",
            "options": [
                "VPC Peering allows VPCs to communicate, even with overlapping CIDR blocks",
                "VPC Peering connections are transitive",
                "VPC Peering is used to connect VPCs in different AWS accounts",
                "VPC Peering connections cannot be established across regions",
                "VPC Peering is used to connect VPCs to on-premises networks"
            ],
            "correct_answers": [2],
            "explanation": "VPC Peering allows VPCs, even in different AWS accounts, to communicate as if they were on the same network, provided their CIDR blocks do not overlap.",
            "question_type": "single-choice"
        },
        {
            "id": "Q299",
            "question": "What is the primary purpose of a VPC Endpoint?",
            "options": [
                "To allow private connections from a VPC to AWS services without using the Internet",
                "To connect a VPC to an on-premises network",
                "To provide Internet access to a VPC",
                "To connect two VPCs together",
                "To monitor network traffic in a VPC"
            ],
            "correct_answers": [0],
            "explanation": "A VPC Endpoint allows you to privately connect your VPC to supported AWS services without requiring an Internet Gateway, NAT device, VPN connection, or AWS Direct Connect.",
            "question_type": "single-choice"
        },
        {
            "id": "Q300",
            "question": "Which type of VPC Endpoint is used to connect to Amazon S3 and DynamoDB?",
            "options": [
                "Interface Endpoint",
                "Gateway Endpoint",
                "NAT Endpoint",
                "VPN Endpoint",
                "Direct Connect Endpoint"
            ],
            "correct_answers": [1],
            "explanation": "A Gateway Endpoint is used to connect to Amazon S3 and DynamoDB from within a VPC.",
            "question_type": "single-choice"
        },
        {
            "id": "Q301",
            "question": "Which of the following is true about subnets in a VPC?",
            "options": [
                "They can span multiple Availability Zones",
                "They are tied to a single Availability Zone",
                "They are global resources",
                "They provide encryption services",
                "They act as firewalls for instances"
            ],
            "correct_answers": [1],
            "explanation": "Subnets are tied to a single Availability Zone within a VPC.",
            "question_type": "single-choice"
        },
        {
            "id": "Q302",
            "question": "What is the default behavior of a new Security Group in a VPC?",
            "options": [
                "Allows all inbound and outbound traffic",
                "Denies all inbound and outbound traffic",
                "Allows all outbound traffic and denies all inbound traffic",
                "Denies all outbound traffic and allows all inbound traffic",
                "Allows only SSH traffic by default"
            ],
            "correct_answers": [2],
            "explanation": "By default, a new Security Group allows all outbound traffic and denies all inbound traffic.",
            "question_type": "single-choice"
        },
        {
            "id": "Q303",
            "question": "What AWS service captures information about the IP traffic going to and from network interfaces in your VPC?",
            "options": [
                "VPC Flow Logs",
                "AWS CloudTrail",
                "AWS Config",
                "Amazon CloudWatch Events",
                "AWS Trusted Advisor"
            ],
            "correct_answers": [0],
            "explanation": "VPC Flow Logs capture detailed information about the IP traffic going to and from network interfaces in your VPC.",
            "question_type": "single-choice"
        },
        {
            "id": "Q304",
            "question": "Which VPC component allows you to connect your on-premises network to your VPC over the public Internet, creating an encrypted connection?",
            "options": [
                "AWS Direct Connect",
                "Site-to-Site VPN",
                "Internet Gateway",
                "VPC Peering",
                "Transit Gateway"
            ],
            "correct_answers": [1],
            "explanation": "A Site-to-Site VPN connection allows you to securely connect your on-premises network to your VPC over the public Internet using an encrypted VPN tunnel.",
            "question_type": "single-choice"
        },
        {
            "id": "Q305",
            "question": "What is AWS Direct Connect used for?",
            "options": [
                "To establish a dedicated private network connection from your premises to AWS",
                "To connect VPCs in different AWS regions",
                "To provide Internet access to instances in a VPC",
                "To create a peering connection between VPCs",
                "To monitor AWS services"
            ],
            "correct_answers": [0],
            "explanation": "AWS Direct Connect provides a dedicated, private network connection from your premises to AWS, improving bandwidth throughput and reducing network costs.",
            "question_type": "single-choice"
        },
        {
            "id": "Q306",
            "question": "Which of the following is a benefit of using VPC Endpoints?",
            "options": [
                "They encrypt data at rest",
                "They allow you to privately connect your VPC to AWS services without using public IPs",
                "They provide public Internet access to instances in a private subnet",
                "They reduce the latency between your VPC and AWS services by using public networks",
                "They enable cross-region replication"
            ],
            "correct_answers": [1],
            "explanation": "VPC Endpoints allow you to privately connect your VPC to supported AWS services without requiring public IP addresses or traversing the Internet.",
            "question_type": "single-choice"
        },
        {
            "id": "Q307",
            "question": "Which AWS service can be used to connect multiple VPCs and on-premises networks through a central hub?",
            "options": [
                "VPC Peering",
                "AWS Transit Gateway",
                "AWS Direct Connect",
                "Site-to-Site VPN",
                "VPC Endpoint"
            ],
            "correct_answers": [1],
            "explanation": "AWS Transit Gateway enables you to connect multiple VPCs and on-premises networks to a single gateway, acting as a central hub.",
            "question_type": "single-choice"
        },
        {
            "id": "Q308",
            "question": "What is the maximum number of Internet Gateways you can attach to a VPC?",
            "options": [
                "Unlimited",
                "One",
                "Two",
                "Five",
                "Ten"
            ],
            "correct_answers": [1],
            "explanation": "You can attach only one Internet Gateway to a VPC at a time.",
            "question_type": "single-choice"
        },
        {
            "id": "Q309",
            "question": "Which Route 53 routing policy would you use to route traffic based on the geographic location of your users?",
            "options": [
                "Latency-based Routing",
                "Weighted Routing",
                "Geolocation Routing",
                "Failover Routing",
                "Simple Routing"
            ],
            "correct_answers": [2],
            "explanation": "Geolocation Routing allows you to route traffic based on the geographic location of your users.",
            "question_type": "single-choice"
        },
        {
            "id": "Q310",
            "question": "What is the purpose of Route 53 Traffic Flow?",
            "options": [
                "To monitor DNS query performance",
                "To provide a visual editor for managing complex routing configurations",
                "To encrypt DNS queries",
                "To enable DNSSEC for your domains",
                "To manage domain registrations"
            ],
            "correct_answers": [1],
            "explanation": "Route 53 Traffic Flow provides a visual editor to create and manage complex routing configurations using a traffic flow policy.",
            "question_type": "single-choice"
        },
        {
            "id": "Q311",
            "question": "Which of the following statements about VPC subnets is true?",
            "options": [
                "A subnet can have instances in multiple Availability Zones",
                "An instance in a private subnet can directly access the Internet without a NAT device",
                "Subnets can be public or private, depending on their route tables",
                "Subnets automatically have Internet connectivity",
                "Subnets provide encryption for data at rest"
            ],
            "correct_answers": [2],
            "explanation": "A subnet is considered public if its associated route table has a route to an Internet Gateway; otherwise, it is private.",
            "question_type": "single-choice"
        },
        {
            "id": "Q312",
            "question": "Which Route 53 routing policy should you use when you want Route 53 to respond to DNS queries with up to eight healthy records selected at random?",
            "options": [
                "Simple Routing",
                "Weighted Routing",
                "Latency-based Routing",
                "Multi-Value Answer Routing",
                "Failover Routing"
            ],
            "correct_answers": [3],
            "explanation": "Multi-Value Answer Routing allows Route 53 to return up to eight healthy records selected at random, helping with load balancing.",
            "question_type": "single-choice"
        },
        {
            "id": "Q313",
            "question": "In VPC, what does CIDR stand for?",
            "options": [
                "Classless Inter-Domain Routing",
                "Cloud Infrastructure Design Routing",
                "Centralized Internet Data Registry",
                "Customer Internet Data Routing",
                "Cross-Instance Data Replication"
            ],
            "correct_answers": [0],
            "explanation": "CIDR stands for Classless Inter-Domain Routing, a method for allocating IP addresses and routing.",
            "question_type": "single-choice"
        },
        {
            "id": "Q314",
            "question": "Which AWS service provides a content delivery network (CDN) that works seamlessly with Route 53?",
            "options": [
                "Amazon S3",
                "Amazon CloudFront",
                "AWS Global Accelerator",
                "AWS Direct Connect",
                "Amazon VPC"
            ],
            "correct_answers": [1],
            "explanation": "Amazon CloudFront is a CDN that integrates with Route 53 to deliver content with low latency.",
            "question_type": "single-choice"
        },
        {
            "id": "Q315",
            "question": "What is an Elastic Network Interface (ENI) in a VPC?",
            "options": [
                "A virtual network interface that can be attached to an instance",
                "A security group associated with an instance",
                "A firewall that controls traffic to subnets",
                "A VPN connection to on-premises networks",
                "A virtual private gateway"
            ],
            "correct_answers": [0],
            "explanation": "An Elastic Network Interface (ENI) is a virtual network interface that can be attached to an EC2 instance in a VPC.",
            "question_type": "single-choice"
        },
        {
            "id": "Q316",
            "question": "Which Route 53 feature allows you to route traffic based on the geographic location of your resources and bias settings?",
            "options": [
                "Geolocation Routing",
                "Geoproximity Routing",
                "Latency-based Routing",
                "Weighted Routing",
                "Multi-Value Answer Routing"
            ],
            "correct_answers": [1],
            "explanation": "Geoproximity Routing allows you to route traffic based on the geographic location of your resources and provides biasing options.",
            "question_type": "single-choice"
        },
        {
            "id": "Q317",
            "question": "Which type of VPC Endpoint is powered by AWS PrivateLink and provides private connectivity to services hosted in AWS or on-premises?",
            "options": [
                "Gateway Endpoint",
                "Interface Endpoint",
                "NAT Endpoint",
                "VPN Endpoint",
                "Direct Connect Endpoint"
            ],
            "correct_answers": [1],
            "explanation": "Interface Endpoints are powered by AWS PrivateLink and provide private connectivity to services hosted in AWS or on-premises.",
            "question_type": "single-choice"
        },
        {
            "id": "Q318",
            "question": "What is the function of a Route Table in a VPC?",
            "options": [
                "To define firewall rules for instances",
                "To determine how traffic is directed within the VPC",
                "To provide DNS resolution",
                "To enable VPC Peering",
                "To manage subnet IP ranges"
            ],
            "correct_answers": [1],
            "explanation": "A Route Table contains a set of rules, called routes, that determine where network traffic from your subnets or gateway is directed.",
            "question_type": "single-choice"
        },
        {
            "id": "Q319",
            "question": "Which AWS service provides a fully managed domain name system that translates domain names into IP addresses?",
            "options": [
                "Amazon EC2",
                "Amazon Route 53",
                "Amazon VPC",
                "AWS Direct Connect",
                "Amazon CloudFront"
            ],
            "correct_answers": [1],
            "explanation": "Amazon Route 53 is AWS's scalable and highly available Domain Name System (DNS) web service.",
            "question_type": "single-choice"
        },
        {
            "id": "Q320",
            "question": "What is a key difference between an Internet Gateway and a NAT Gateway in a VPC?",
            "options": [
                "An Internet Gateway allows inbound and outbound traffic; a NAT Gateway only allows inbound traffic",
                "An Internet Gateway allows instances with public IPs to access the Internet; a NAT Gateway allows instances in private subnets to access the Internet",
                "A NAT Gateway provides DNS services; an Internet Gateway provides security services",
                "An Internet Gateway encrypts data; a NAT Gateway decrypts data",
                "There is no difference; they serve the same function"
            ],
            "correct_answers": [1],
            "explanation": "An Internet Gateway allows communication between instances with public IPs in a VPC and the Internet. A NAT Gateway allows instances in private subnets to initiate outbound traffic to the Internet.",
            "question_type": "single-choice"
        },
        {
            "id": "Q321",
            "question": "What is the primary use case for VPC Flow Logs?",
            "options": [
                "To encrypt data in transit",
                "To capture information about IP traffic going to and from network interfaces",
                "To manage DNS records",
                "To create VPN connections",
                "To monitor application performance"
            ],
            "correct_answers": [1],
            "explanation": "VPC Flow Logs capture information about the IP traffic going to and from network interfaces in your VPC.",
            "question_type": "single-choice"
        },
        {
            "id": "Q322",
            "question": "Which AWS service would you use to register a new domain name?",
            "options": [
                "Amazon EC2",
                "AWS Lambda",
                "Amazon Route 53",
                "AWS CloudFormation",
                "Amazon VPC"
            ],
            "correct_answers": [2],
            "explanation": "Amazon Route 53 provides domain registration services, allowing you to register new domain names.",
            "question_type": "single-choice"
        },
        {
            "id": "Q323",
            "question": "Which of the following is NOT a characteristic of Security Groups in a VPC?",
            "options": [
                "They are stateful",
                "They operate at the instance level",
                "They support allow rules and deny rules",
                "They evaluate all rules before deciding whether to allow traffic",
                "They can reference other Security Groups"
            ],
            "correct_answers": [2],
            "explanation": "Security Groups are stateful, operate at the instance level, evaluate all rules before allowing traffic, and can reference other Security Groups, but they do NOT support deny rules—only allow rules.",
            "question_type": "single-choice"
        },
        {
            "id": "Q324",
            "question": "In Route 53, what is an SOA record?",
            "options": [
                "Start of Authority record, containing administrative information about the zone",
                "Service of Address record, mapping services to IP addresses",
                "Secondary of Authority record, indicating backup name servers",
                "Standard Operational Address record, used for routing policies",
                "Source of Authentication record, providing security information"
            ],
            "correct_answers": [0],
            "explanation": "An SOA (Start of Authority) record provides administrative information about the zone, including the primary name server and email of the domain administrator.",
            "question_type": "single-choice"
        },
        {
            "id": "Q325",
            "question": "Which Route 53 feature allows you to define routing policies using a visual editor and version them for reuse?",
            "options": [
                "Traffic Flow",
                "Latency-based Routing",
                "Geoproximity Routing",
                "Health Checks",
                "DNSSEC"
            ],
            "correct_answers": [0],
            "explanation": "Route 53 Traffic Flow provides a visual editor to create and manage complex routing configurations and supports versioning for reuse.",
            "question_type": "single-choice"
        }
   ,
      {
        "id": "Q501",
        "question": "Your company wants to host a static website using AWS services. Which AWS service should you use to host the website, ensuring high availability and scalability?",
        "options": [
          "Amazon EC2",
          "Amazon S3",
          "Amazon RDS",
          "AWS Lambda",
          "Amazon DynamoDB"
        ],
        "correct_answers": [1],
        "explanation": "Amazon S3 can host static websites and provides high availability and scalability. It is suitable for hosting static content like HTML, CSS, and JavaScript files.",
        "question_type": "single-choice"
      },
      {
        "id": "Q502",
        "question": "You need to store a large amount of data in AWS, with some objects exceeding 5 GB. Which feature of Amazon S3 allows you to efficiently upload these large objects?",
        "options": [
          "Server-Side Encryption",
          "Multi-Part Upload",
          "Versioning",
          "S3 Transfer Acceleration",
          "Object Lock"
        ],
        "correct_answers": [1],
        "explanation": "The Multi-Part Upload feature in Amazon S3 allows you to upload large objects in parts, which can be uploaded independently and in parallel, improving efficiency and reliability.",
        "question_type": "single-choice"
      },
      {
        "id": "Q503",
        "question": "Your application requires users to download files from an S3 bucket, but you want to restrict access so that only authenticated users can download. Which method should you use to achieve this?",
        "options": [
          "Make the bucket public",
          "Use S3 Bucket Policies to allow public read access",
          "Generate pre-signed URLs for authenticated users",
          "Enable website hosting on the bucket",
          "Use AWS Shield to protect the bucket"
        ],
        "correct_answers": [2],
        "explanation": "Generating pre-signed URLs allows you to grant temporary access to private objects in S3, ensuring only authenticated users can download the files.",
        "question_type": "single-choice"
      },
      {
        "id": "Q504",
        "question": "Your organization needs to ensure that all objects uploaded to an S3 bucket are encrypted at rest. Which feature of S3 allows you to enforce this requirement?",
        "options": [
          "Bucket Policies",
          "Access Control Lists (ACLs)",
          "Default Encryption",
          "Versioning",
          "Lifecycle Policies"
        ],
        "correct_answers": [2],
        "explanation": "Enabling Default Encryption on the S3 bucket ensures that all new objects are encrypted at rest using the specified encryption method.",
        "question_type": "single-choice"
      },
      {
        "id": "Q505",
        "question": "You are designing a system where objects in an S3 bucket must be replicated to another bucket in a different AWS region for compliance purposes. Which S3 feature allows you to set up this replication?",
        "options": [
          "S3 Lifecycle Policies",
          "Cross-Region Replication (CRR)",
          "S3 Transfer Acceleration",
          "S3 Batch Operations",
          "S3 Intelligent-Tiering"
        ],
        "correct_answers": [1],
        "explanation": "Cross-Region Replication (CRR) allows automatic, asynchronous copying of objects across buckets in different AWS regions.",
        "question_type": "single-choice"
      },
      {
        "id": "Q506",
        "question": "Your team wants to analyze access patterns to your S3 objects to optimize storage costs. Which S3 feature provides insights to help you decide when to transition objects to different storage classes?",
        "options": [
          "S3 Access Logs",
          "S3 Storage Class Analysis",
          "S3 Inventory",
          "S3 Object Tagging",
          "S3 Event Notifications"
        ],
        "correct_answers": [1],
        "explanation": "S3 Storage Class Analysis provides data to help you analyze storage access patterns and transition objects to the appropriate storage class.",
        "question_type": "single-choice"
      },
      {
        "id": "Q507",
        "question": "A company needs to ensure that deleted S3 objects can be recovered for a certain period. Which S3 feature should be enabled to meet this requirement?",
        "options": [
          "Bucket Versioning",
          "S3 Lifecycle Policies",
          "Server-Side Encryption",
          "Cross-Origin Resource Sharing (CORS)",
          "Object Lock"
        ],
        "correct_answers": [0],
        "explanation": "Enabling Bucket Versioning allows you to recover deleted objects by retrieving previous versions of those objects.",
        "question_type": "single-choice"
      },
      {
        "id": "Q508",
        "question": "You need to host a static website on S3 and ensure that users accessing the root domain (e.g., example.com) are redirected to the S3 website endpoint. What is the best way to achieve this?",
        "options": [
          "Use Amazon Route 53 with an Alias record pointing to the S3 website endpoint",
          "Configure an A record in Route 53 pointing to the S3 bucket",
          "Set up a CNAME record pointing to the S3 bucket",
          "Enable Cross-Region Replication",
          "Use AWS Lambda to redirect requests"
        ],
        "correct_answers": [0],
        "explanation": "Using Amazon Route 53 with an Alias record pointing to the S3 website endpoint allows root domain access to the S3-hosted website.",
        "question_type": "single-choice"
      },
      {
        "id": "Q509",
        "question": "Your application stores critical data in S3 that should not be accidentally deleted by users. How can you prevent accidental deletions while still allowing users to add and read objects?",
        "options": [
          "Enable MFA Delete on the S3 bucket",
          "Disable all IAM policies for deletion",
          "Set the bucket to read-only",
          "Remove all users' permissions",
          "Encrypt the bucket with SSE-C"
        ],
        "correct_answers": [0],
        "explanation": "Enabling MFA Delete adds an extra layer of protection by requiring multi-factor authentication for object deletion operations.",
        "question_type": "single-choice"
      },
      {
        "id": "Q510",
        "question": "A company needs to store archive data that is rarely accessed but must be retrievable within minutes when needed. Which S3 storage class is most cost-effective for this use case?",
        "options": [
          "S3 Standard",
          "S3 Standard-Infrequent Access",
          "S3 One Zone-Infrequent Access",
          "S3 Glacier Instant Retrieval",
          "S3 Glacier Deep Archive"
        ],
        "correct_answers": [3],
        "explanation": "S3 Glacier Instant Retrieval is designed for data that is accessed rarely but requires millisecond retrieval, making it cost-effective for such use cases.",
        "question_type": "single-choice"
      },
      {
        "id": "Q511",
        "question": "Your application is hosted in multiple regions and you want to ensure users get low-latency access to S3 objects. Which AWS service can help distribute content globally and cache it at edge locations?",
        "options": [
          "Amazon CloudFront",
          "Amazon Route 53",
          "AWS Global Accelerator",
          "AWS Direct Connect",
          "Amazon Elastic File System (EFS)"
        ],
        "correct_answers": [0],
        "explanation": "Amazon CloudFront is a content delivery network (CDN) that caches content at edge locations globally, reducing latency for users.",
        "question_type": "single-choice"
      },
      {
        "id": "Q512",
        "question": "You need to enforce that objects in an S3 bucket are only accessible via HTTPS and not HTTP. How can you configure this requirement?",
        "options": [
          "Enable SSL certificates on the S3 bucket",
          "Use a bucket policy that denies requests without secure transport",
          "Set up a VPC endpoint for S3",
          "Configure S3 default encryption",
          "Enable MFA Delete on the bucket"
        ],
        "correct_answers": [1],
        "explanation": "Using a bucket policy with the condition `aws:SecureTransport` ensures that only HTTPS requests are allowed.",
        "question_type": "single-choice"
      },
      {
        "id": "Q513",
        "question": "An application running on EC2 instances needs access to an S3 bucket. According to AWS best practices, how should you grant the EC2 instances the necessary permissions?",
        "options": [
          "Embed AWS credentials in the application code",
          "Store credentials in environment variables",
          "Assign an IAM role to the EC2 instances with the necessary permissions",
          "Use a bucket policy to allow public access",
          "Create an IAM user and distribute the access keys"
        ],
        "correct_answers": [2],
        "explanation": "Assigning an IAM role to EC2 instances is the recommended approach, as it provides temporary credentials and follows the principle of least privilege.",
        "question_type": "single-choice"
      },
      {
        "id": "Q514",
        "question": "You have a requirement to move objects in S3 to a lower-cost storage class after 30 days and delete them after 365 days. Which feature allows you to automate this process?",
        "options": [
          "S3 Object Lock",
          "S3 Lifecycle Configuration",
          "S3 Versioning",
          "S3 Replication",
          "S3 Access Points"
        ],
        "correct_answers": [1],
        "explanation": "S3 Lifecycle Configuration allows you to define rules to transition objects to different storage classes and expire them after a specified period.",
        "question_type": "single-choice"
      },
      {
        "id": "Q515",
        "question": "Your web application needs to serve dynamic content stored in S3, and you want to optimize the delivery for users globally. Which combination of services would best meet this requirement?",
        "options": [
          "Amazon S3 and AWS Direct Connect",
          "Amazon S3 and Amazon CloudFront",
          "Amazon S3 and AWS Global Accelerator",
          "Amazon S3 and Amazon Route 53",
          "Amazon S3 and AWS WAF"
        ],
        "correct_answers": [1],
        "explanation": "Using Amazon S3 with Amazon CloudFront provides optimized content delivery globally by caching content at edge locations.",
        "question_type": "single-choice"
      },
      {
        "id": "Q516",
        "question": "A developer needs to programmatically upload files to S3 from an on-premises application. Which AWS service or tool should they use to interact with S3 from their code?",
        "options": [
          "AWS Management Console",
          "AWS CLI",
          "AWS SDK",
          "AWS CodeDeploy",
          "AWS CloudFormation"
        ],
        "correct_answers": [2],
        "explanation": "AWS SDK provides APIs for various programming languages, allowing developers to interact with AWS services like S3 from their code.",
        "question_type": "single-choice"
      },
      {
        "id": "Q517",
        "question": "Your organization wants to monitor API call logs to S3 buckets for auditing purposes. Which AWS service should you use to collect and analyze these logs?",
        "options": [
          "Amazon S3 Access Logs",
          "AWS CloudTrail",
          "AWS Config",
          "Amazon CloudWatch Logs",
          "AWS Trusted Advisor"
        ],
        "correct_answers": [1],
        "explanation": "AWS CloudTrail records API calls made to AWS services, including S3, which can be used for auditing and compliance purposes.",
        "question_type": "single-choice"
      },
      {
        "id": "Q518",
        "question": "An application requires access to multiple AWS accounts' S3 buckets. How can you enable this cross-account access securely?",
        "options": [
          "Make all buckets public",
          "Use bucket policies to grant access to the other AWS accounts",
          "Share IAM users and credentials across accounts",
          "Use AWS Organizations to merge accounts",
          "Copy data between buckets"
        ],
        "correct_answers": [1],
        "explanation": "Using bucket policies to grant access to specific AWS accounts allows secure cross-account access to S3 buckets.",
        "question_type": "single-choice"
      },
      {
        "id": "Q519",
        "question": "You need to ensure that an S3 bucket can be accessed from a web application hosted on a different domain, but the browser is blocking the requests due to CORS policy. How can you resolve this issue?",
        "options": [
          "Enable versioning on the bucket",
          "Configure Cross-Origin Resource Sharing (CORS) rules on the bucket",
          "Use signed URLs for access",
          "Enable website hosting on the bucket",
          "Set the bucket policy to allow public access"
        ],
        "correct_answers": [1],
        "explanation": "Configuring CORS rules on the S3 bucket allows cross-domain requests from the specified origins, resolving the browser's CORS policy issues.",
        "question_type": "single-choice"
      },
      {
        "id": "Q520",
        "question": "A company wants to store sensitive data in S3 and needs to manage their own encryption keys. Which encryption method should they use?",
        "options": [
          "Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3)",
          "Server-Side Encryption with AWS KMS-Managed Keys (SSE-KMS)",
          "Server-Side Encryption with Customer-Provided Keys (SSE-C)",
          "Client-Side Encryption with KMS",
          "No encryption"
        ],
        "correct_answers": [2],
        "explanation": "SSE-C allows customers to manage their own encryption keys, which are provided with each request to S3.",
        "question_type": "single-choice"
      },
      {
        "id": "Q521",
        "question": "Your application needs to process real-time notifications when objects are uploaded to an S3 bucket. Which feature can you use to trigger processing when new objects are added?",
        "options": [
          "S3 Event Notifications",
          "S3 Lifecycle Rules",
          "S3 Inventory",
          "S3 Analytics",
          "S3 Replication"
        ],
        "correct_answers": [0],
        "explanation": "S3 Event Notifications can be configured to send notifications to services like AWS Lambda, SNS, or SQS when objects are created in a bucket.",
        "question_type": "single-choice"
      },
      {
        "id": "Q522",
        "question": "An organization wants to distribute files from S3 securely using signed URLs that expire after a certain time. Which service and feature should they use?",
        "options": [
          "Amazon S3 with Pre-Signed URLs",
          "Amazon CloudFront with Signed URLs",
          "AWS Direct Connect with VPC Endpoints",
          "AWS VPN Connections",
          "AWS Shield"
        ],
        "correct_answers": [0],
        "explanation": "Amazon S3 Pre-Signed URLs allow secure, temporary access to objects in a private bucket, expiring after a specified time.",
        "question_type": "single-choice"
      },
      {
        "id": "Q523",
        "question": "Your company has a policy that requires all data transfers to and from S3 to be encrypted in transit. What should you do to enforce this policy?",
        "options": [
          "Enable Default Encryption",
          "Use a bucket policy that requires SSL",
          "Enable S3 Versioning",
          "Use S3 Transfer Acceleration",
          "Set up an S3 VPC Endpoint"
        ],
        "correct_answers": [1],
        "explanation": "Using a bucket policy that requires SSL (HTTPS) ensures that all data in transit is encrypted when accessing S3.",
        "question_type": "single-choice"
      },
      {
        "id": "Q524",
        "question": "You are experiencing slow upload speeds to S3 from users in distant geographical locations. Which feature can you use to improve data transfer performance?",
        "options": [
          "S3 Cross-Region Replication",
          "S3 Transfer Acceleration",
          "S3 Lifecycle Policies",
          "AWS Direct Connect",
          "S3 Intelligent-Tiering"
        ],
        "correct_answers": [1],
        "explanation": "S3 Transfer Acceleration uses Amazon CloudFront's globally distributed edge locations to accelerate uploads to S3.",
        "question_type": "single-choice"
      },
      {
        "id": "Q525",
        "question": "Your team needs to perform SQL queries directly on data stored in S3 without loading it into a database. Which feature allows you to query data in S3 using SQL expressions?",
        "options": [
          "Amazon Athena",
          "S3 Select",
          "AWS Glue",
          "Amazon Redshift",
          "Amazon EMR"
        ],
        "correct_answers": [1],
        "explanation": "S3 Select allows you to use SQL expressions to retrieve subsets of data from S3 objects, reducing the amount of data transferred.",
        "question_type": "single-choice"
      },
      {
        "id": "Q526",
        "question": "A data analytics application processes files stored in S3 and needs to retrieve only specific data from large objects to optimize performance. Which feature should you use?",
        "options": [
          "S3 Transfer Acceleration",
          "S3 Multipart Upload",
          "S3 Select",
          "S3 Object Lock",
          "S3 Event Notifications"
        ],
        "correct_answers": [2],
        "explanation": "S3 Select enables applications to retrieve specific data from within objects using SQL expressions, improving performance by reducing data transfer.",
        "question_type": "single-choice"
      },
      {
        "id": "Q527",
        "question": "You need to ensure that a specific S3 bucket can only be accessed from EC2 instances within your VPC. Which feature should you use to restrict access appropriately?",
        "options": [
          "S3 Bucket Policies",
          "VPC Endpoint for S3",
          "S3 Access Logs",
          "S3 ACLs",
          "AWS Direct Connect"
        ],
        "correct_answers": [1],
        "explanation": "Creating a VPC Endpoint for S3 allows EC2 instances in your VPC to access S3 without traversing the public Internet, and you can use endpoint policies to restrict access.",
        "question_type": "single-choice"
      },
      {
        "id": "Q528",
        "question": "Your organization wants to manage multiple S3 buckets with different access policies for various teams. Which feature can simplify the management of access permissions?",
        "options": [
          "S3 Bucket Policies",
          "S3 Access Points",
          "S3 Lifecycle Policies",
          "S3 Versioning",
          "S3 Batch Operations"
        ],
        "correct_answers": [1],
        "explanation": "S3 Access Points simplify access management by providing dedicated access control and network configurations for shared data sets in S3.",
        "question_type": "single-choice"
      },
      {
        "id": "Q529",
        "question": "A company needs to migrate petabytes of data from an on-premises data center to Amazon S3. Which AWS service or feature would enable this large-scale data transfer efficiently?",
        "options": [
          "AWS DataSync",
          "AWS Snowball Edge",
          "S3 Transfer Acceleration",
          "AWS Direct Connect",
          "AWS VPN"
        ],
        "correct_answers": [1],
        "explanation": "AWS Snowball Edge is a physical device that can be used to transfer petabytes of data to AWS, which is efficient for large-scale migrations.",
        "question_type": "single-choice"
      },
      {
        "id": "Q530",
        "question": "An application stores user-uploaded images in S3. To reduce costs, you need to automatically move images to the most cost-effective storage class based on access patterns. Which S3 feature facilitates this?",
        "options": [
          "S3 Intelligent-Tiering",
          "S3 Standard-Infrequent Access",
          "S3 Lifecycle Policies",
          "S3 Glacier",
          "S3 One Zone-Infrequent Access"
        ],
        "correct_answers": [0],
        "explanation": "S3 Intelligent-Tiering automatically moves objects between access tiers based on changing access patterns, optimizing storage costs.",
        "question_type": "single-choice"
      },
      {
        "id": "Q531",
        "question": "Your application requires immediate failover to another region in case of a disaster. How can you ensure your S3 data is available in another region?",
        "options": [
          "Enable S3 Cross-Region Replication",
          "Use S3 Transfer Acceleration",
          "Set up S3 Lifecycle Policies",
          "Use Amazon CloudFront",
          "Create a backup script to copy data"
        ],
        "correct_answers": [0],
        "explanation": "Enabling S3 Cross-Region Replication copies objects asynchronously to a bucket in another region, providing high availability and disaster recovery.",
        "question_type": "single-choice"
      },
      {
        "id": "Q532",
        "question": "An EC2 instance needs to retrieve secrets stored in AWS Secrets Manager securely. What is the best way to grant access to the EC2 instance?",
        "options": [
          "Assign an IAM role to the EC2 instance with permissions to access Secrets Manager",
          "Store the secrets in environment variables",
          "Embed the secrets in the application code",
          "Use AWS KMS to encrypt the secrets",
          "Create a bucket policy to grant access"
        ],
        "correct_answers": [0],
        "explanation": "Assigning an IAM role to the EC2 instance provides secure and temporary credentials to access AWS Secrets Manager.",
        "question_type": "single-choice"
      },
      {
        "id": "Q533",
        "question": "You need to automate the creation of AWS resources, including S3 buckets, IAM roles, and EC2 instances, in a repeatable way. Which AWS service should you use?",
        "options": [
          "AWS CodeDeploy",
          "AWS CloudFormation",
          "AWS Elastic Beanstalk",
          "AWS OpsWorks",
          "AWS CLI"
        ],
        "correct_answers": [1],
        "explanation": "AWS CloudFormation allows you to model and provision AWS resources using templates, enabling automation and repeatability.",
        "question_type": "single-choice"
      },
      {
        "id": "Q534",
        "question": "Your organization wants to enforce that all new S3 buckets have public access blocked. How can you ensure this policy is applied across all accounts in AWS Organizations?",
        "options": [
          "Use AWS Config Rules",
          "Manually check each bucket",
          "Set bucket policies on each bucket",
          "Use Service Control Policies (SCPs)",
          "Enable default encryption"
        ],
        "correct_answers": [3],
        "explanation": "Using Service Control Policies (SCPs) in AWS Organizations allows you to enforce policies across all accounts, such as blocking public access to S3 buckets.",
        "question_type": "single-choice"
      },
      {
        "id": "Q535",
        "question": "A developer wants to interact with AWS services from their local development environment. Which credentials provider chain does the AWS SDK use to locate credentials?",
        "options": [
          "Environment variables, AWS credentials file, IAM role",
          "IAM role, AWS credentials file, environment variables",
          "AWS credentials file, IAM role, environment variables",
          "IAM role only",
          "AWS credentials file only"
        ],
        "correct_answers": [0],
        "explanation": "The AWS SDK searches for credentials in this order: environment variables, AWS credentials file (~/.aws/credentials), and then IAM role (if running on AWS resources).",
        "question_type": "single-choice"
      },
      {
        "id": "Q536",
        "question": "An application running in Docker containers needs to be deployed to AWS without managing the underlying infrastructure. Which AWS service can you use to run containers serverlessly?",
        "options": [
          "Amazon ECS with EC2 Launch Type",
          "Amazon ECS with Fargate Launch Type",
          "Amazon EC2",
          "AWS Elastic Beanstalk",
          "Amazon EKS with self-managed nodes"
        ],
        "correct_answers": [1],
        "explanation": "Amazon ECS with Fargate Launch Type allows you to run containers without managing the underlying EC2 instances, providing a serverless experience.",
        "question_type": "single-choice"
      },
      {
        "id": "Q537",
        "question": "You are experiencing intermittent throttling errors when making API calls to AWS services. What should you implement to handle these errors gracefully?",
        "options": [
          "Retry immediately without delay",
          "Implement exponential backoff in your API requests",
          "Increase the API call frequency",
          "Use multiple AWS accounts",
          "Disable API throttling"
        ],
        "correct_answers": [1],
        "explanation": "Implementing exponential backoff in your API requests helps to mitigate throttling errors by reducing the frequency of retries over time.",
        "question_type": "single-choice"
      },
      {
        "id": "Q538",
        "question": "A developer wants to store and version control infrastructure templates for deploying AWS resources. Which AWS service can help manage infrastructure as code?",
        "options": [
          "AWS CodeCommit",
          "AWS CloudFormation",
          "AWS CodeDeploy",
          "AWS CodePipeline",
          "AWS Elastic Beanstalk"
        ],
        "correct_answers": [1],
        "explanation": "AWS CloudFormation allows you to manage AWS resources using templates, supporting infrastructure as code practices.",
        "question_type": "single-choice"
      },
      {
        "id": "Q539",
        "question": "Your organization wants to manage and deploy containerized applications using Kubernetes without managing the Kubernetes control plane. Which AWS service should you choose?",
        "options": [
          "Amazon ECS",
          "Amazon EKS",
          "AWS Fargate",
          "AWS Lambda",
          "AWS Elastic Beanstalk"
        ],
        "correct_answers": [1],
        "explanation": "Amazon EKS is a managed Kubernetes service that allows you to run Kubernetes on AWS without managing the control plane.",
        "question_type": "single-choice"
      },
      {
        "id": "Q540",
        "question": "You need to deploy a web application that requires a load balancer, auto-scaling, and environment variables, but you prefer not to manage the underlying infrastructure. Which AWS service should you use?",
        "options": [
          "AWS Elastic Beanstalk",
          "Amazon EC2",
          "AWS Lambda",
          "Amazon ECS with Fargate",
          "AWS OpsWorks"
        ],
        "correct_answers": [0],
        "explanation": "AWS Elastic Beanstalk simplifies the deployment of web applications by managing the underlying infrastructure, including load balancing and auto-scaling.",
        "question_type": "single-choice"
      },
      {
        "id": "Q541",
        "question": "An S3 bucket contains sensitive data that must not be publicly accessible. How can you ensure that the bucket is not accidentally made public?",
        "options": [
          "Enable Default Encryption",
          "Enable S3 Block Public Access settings on the bucket",
          "Set a bucket policy allowing all actions",
          "Enable website hosting",
          "Use Amazon CloudFront"
        ],
        "correct_answers": [1],
        "explanation": "Enabling S3 Block Public Access settings on the bucket prevents public access policies from being applied, ensuring the bucket is not made public accidentally.",
        "question_type": "single-choice"
      },
      {
        "id": "Q542",
        "question": "You are using AWS CloudFormation to deploy infrastructure, but you want to prevent accidental deletions of critical stacks. What feature can you use to protect stacks from deletion?",
        "options": [
          "Enable termination protection on the stack",
          "Use IAM policies to restrict deletion",
          "Set DeletionPolicy to Retain",
          "Remove delete permissions from all users",
          "Use AWS Config to monitor deletions"
        ],
        "correct_answers": [0],
        "explanation": "Enabling termination protection on a CloudFormation stack prevents it from being deleted accidentally.",
        "question_type": "single-choice"
      },
      {
        "id": "Q543",
        "question": "An application requires a shared file system that can be mounted by multiple EC2 instances across multiple Availability Zones. Which AWS service should you use?",
        "options": [
          "Amazon EBS",
          "Amazon S3",
          "Amazon EFS",
          "AWS Storage Gateway",
          "Amazon FSx for Windows File Server"
        ],
        "correct_answers": [2],
        "explanation": "Amazon EFS provides a scalable, fully managed shared file system that can be mounted by multiple EC2 instances across multiple Availability Zones.",
        "question_type": "single-choice"
      },
      {
        "id": "Q544",
        "question": "You want to run containers on AWS without managing servers and need to use Kubernetes APIs. Which combination of services allows you to achieve this?",
        "options": [
          "Amazon EKS with EC2 nodes",
          "Amazon ECS with Fargate",
          "Amazon EKS with Fargate",
          "Amazon EC2 with Docker installed",
          "AWS Lambda"
        ],
        "correct_answers": [2],
        "explanation": "Amazon EKS with Fargate allows you to run Kubernetes pods on AWS without managing EC2 instances, providing a serverless Kubernetes experience.",
        "question_type": "single-choice"
      },
      {
        "id": "Q545",
        "question": "A team needs to automate the deployment process of applications to AWS ECS. Which AWS service can help orchestrate this continuous deployment pipeline?",
        "options": [
          "AWS CodeDeploy",
          "AWS CodePipeline",
          "AWS CodeCommit",
          "AWS CodeBuild",
          "AWS CloudFormation"
        ],
        "correct_answers": [1],
        "explanation": "AWS CodePipeline is a continuous delivery service that helps automate the build, test, and deploy phases of application code every time there is a code change.",
        "question_type": "single-choice"
      },
      {
        "id": "Q546",
        "question": "An organization wants to implement least privilege access to AWS resources. Which AWS feature allows you to define and manage permissions for users and roles?",
        "options": [
          "AWS Config",
          "AWS IAM Policies",
          "AWS Organizations",
          "AWS Shield",
          "AWS Trusted Advisor"
        ],
        "correct_answers": [1],
        "explanation": "AWS IAM Policies allow you to define granular permissions for users, groups, and roles, enabling the implementation of least privilege access.",
        "question_type": "single-choice"
      },
      {
        "id": "Q547",
        "question": "Your application needs to automatically scale the number of ECS tasks based on the number of messages in an SQS queue. Which AWS service or feature should you use?",
        "options": [
          "ECS Service Auto Scaling",
          "AWS Lambda",
          "AWS Application Auto Scaling",
          "AWS CloudWatch Alarms",
          "ECS Task Definitions"
        ],
        "correct_answers": [2],
        "explanation": "AWS Application Auto Scaling can scale ECS services based on CloudWatch metrics, such as the number of messages in an SQS queue.",
        "question_type": "single-choice"
      },
      {
        "id": "Q548",
        "question": "You are deploying an application using AWS Elastic Beanstalk and need to run background tasks. Which Elastic Beanstalk environment tier should you use?",
        "options": [
          "Web Server Environment Tier",
          "Worker Environment Tier",
          "Multi-Container Docker",
          "Single Instance Environment",
          "Load Balanced Environment"
        ],
        "correct_answers": [1],
        "explanation": "The Worker Environment Tier in Elastic Beanstalk is designed for applications that run background tasks and can process messages from an SQS queue.",
        "question_type": "single-choice"
      },
      {
        "id": "Q549",
        "question": "An application uses AWS Lambda functions that need to access resources within a VPC. What must you configure to allow the Lambda functions to access the VPC resources?",
        "options": [
          "Assign an IAM role to the Lambda function",
          "Configure VPC settings in the Lambda function",
          "Use a NAT Gateway",
          "Set up VPC peering",
          "Use AWS Direct Connect"
        ],
        "correct_answers": [1],
        "explanation": "Configuring VPC settings in the Lambda function allows it to access resources within the VPC by specifying the subnet and security group.",
        "question_type": "single-choice"
      },
      {
        "id": "Q550",
        "question": "You need to automate the deletion of old versions of objects in an S3 bucket to reduce storage costs. Which feature allows you to define rules for deleting previous versions after a specified time?",
        "options": [
          "S3 Versioning",
          "S3 Lifecycle Configuration",
          "S3 Object Lock",
          "S3 Replication",
          "S3 Access Points"
        ],
        "correct_answers": [1],
        "explanation": "S3 Lifecycle Configuration can be used to define rules for transitioning objects to different storage classes and expiring old object versions after a specified period.",
        "question_type": "single-choice"
      }
   ,
      {
        "id": "Q551",
        "question": "Your application requires a NoSQL database that can handle millions of requests per second and scales automatically. Which AWS service should you choose?",
        "options": [
          "Amazon RDS",
          "Amazon DynamoDB",
          "Amazon Aurora",
          "Amazon Redshift",
          "Amazon DocumentDB"
        ],
        "correct_answers": [1],
        "explanation": "Amazon DynamoDB is a fully managed NoSQL database service that can handle massive workloads with high performance and scalability.",
        "question_type": "single-choice"
      },
      {
        "id": "Q552",
        "question": "You need to store user session data in a database that requires low latency and high availability across multiple regions. Which DynamoDB feature can help you achieve this?",
        "options": [
          "DynamoDB Streams",
          "Global Tables",
          "Local Secondary Indexes",
          "DynamoDB Accelerator (DAX)",
          "Conditional Writes"
        ],
        "correct_answers": [1],
        "explanation": "DynamoDB Global Tables provide multi-region, multi-master replication, ensuring low-latency access and high availability of data across regions.",
        "question_type": "single-choice"
      },
      {
        "id": "Q553",
        "question": "Your application experiences sudden spikes in traffic, leading to throttling errors in DynamoDB. Which capacity mode should you use to handle unpredictable workloads without manual intervention?",
        "options": [
          "Provisioned Capacity Mode",
          "On-Demand Capacity Mode",
          "Reserved Capacity",
          "Burst Capacity",
          "Throughput Capacity Mode"
        ],
        "correct_answers": [1],
        "explanation": "On-Demand Capacity Mode automatically scales to handle workload spikes without the need for capacity planning, reducing throttling errors.",
        "question_type": "single-choice"
      },
      {
        "id": "Q554",
        "question": "You need to perform atomic writes to multiple items in a DynamoDB table to ensure data consistency. Which DynamoDB feature allows you to do this?",
        "options": [
          "BatchWriteItem",
          "TransactWriteItems",
          "PutItem",
          "UpdateItem",
          "Conditional Writes"
        ],
        "correct_answers": [1],
        "explanation": "TransactWriteItems enables atomic operations across multiple items and tables, ensuring all-or-nothing transactions for write operations.",
        "question_type": "single-choice"
      },
      {
        "id": "Q555",
        "question": "An application needs to read data from DynamoDB with low latency, but some items are accessed much more frequently than others, causing hot partitions. How can you alleviate this issue?",
        "options": [
          "Use Local Secondary Indexes",
          "Enable DynamoDB Streams",
          "Implement Write Sharding",
          "Switch to Eventually Consistent Reads",
          "Increase Provisioned Throughput"
        ],
        "correct_answers": [2],
        "explanation": "Implementing Write Sharding distributes write operations across multiple partitions by adding a suffix to the partition key, reducing hot partition problems.",
        "question_type": "single-choice"
      },
      {
        "id": "Q556",
        "question": "Your application requires caching of frequently accessed items from DynamoDB to reduce read latency. Which AWS service can you use to cache DynamoDB queries without modifying application code significantly?",
        "options": [
          "Amazon ElastiCache",
          "DynamoDB Accelerator (DAX)",
          "Amazon CloudFront",
          "AWS Lambda",
          "Amazon S3"
        ],
        "correct_answers": [1],
        "explanation": "DynamoDB Accelerator (DAX) is a fully managed, in-memory cache for DynamoDB that provides microsecond latency and requires minimal code changes.",
        "question_type": "single-choice"
      },
      {
        "id": "Q557",
        "question": "You need to implement fine-grained access control to restrict users to access only their own records in a DynamoDB table. Which AWS service can help you achieve this securely?",
        "options": [
          "AWS IAM Policies",
          "DynamoDB Item-Level Access Control",
          "Amazon Cognito Identity Pools",
          "DynamoDB Streams",
          "AWS KMS"
        ],
        "correct_answers": [2],
        "explanation": "Amazon Cognito Identity Pools allow you to assign IAM roles to users, and you can use condition keys in IAM policies to enforce fine-grained access control on DynamoDB items.",
        "question_type": "single-choice"
      },
      {
        "id": "Q558",
        "question": "An application needs to query a DynamoDB table using attributes other than the primary key. Which feature allows you to define alternative keys for querying data efficiently?",
        "options": [
          "DynamoDB Streams",
          "Local Secondary Indexes",
          "Global Secondary Indexes",
          "Conditional Writes",
          "Scan Operation"
        ],
        "correct_answers": [2],
        "explanation": "Global Secondary Indexes allow you to define alternative partition and sort keys for querying data efficiently on attributes different from the primary key.",
        "question_type": "single-choice"
      },
      {
        "id": "Q559",
        "question": "You want to ensure that an item in a DynamoDB table is only updated if a certain condition is met, such as a specific attribute value. Which feature should you use?",
        "options": [
          "Atomic Counters",
          "Conditional Writes",
          "BatchWriteItem",
          "DynamoDB Transactions",
          "UpdateItem"
        ],
        "correct_answers": [1],
        "explanation": "Conditional Writes allow you to specify conditions that must be met for the write operation to proceed, ensuring data integrity.",
        "question_type": "single-choice"
      },
      {
        "id": "Q560",
        "question": "Your application needs to process real-time data modifications in DynamoDB and react to them. Which feature enables you to capture and respond to item-level changes in the table?",
        "options": [
          "DynamoDB Streams",
          "AWS Lambda Triggers",
          "DynamoDB Accelerator (DAX)",
          "Global Tables",
          "EventBridge"
        ],
        "correct_answers": [0],
        "explanation": "DynamoDB Streams capture item-level modifications in a table, allowing you to process and react to data changes in real-time.",
        "question_type": "single-choice"
      },
      {
        "id": "Q561",
        "question": "An IoT application writes time-series data to DynamoDB, and you need to automatically remove old data to optimize storage costs. Which feature allows you to set expiration for items?",
        "options": [
          "DynamoDB Streams",
          "Time To Live (TTL)",
          "Global Secondary Indexes",
          "Provisioned Throughput",
          "Conditional Deletes"
        ],
        "correct_answers": [1],
        "explanation": "Time To Live (TTL) enables automatic deletion of expired items based on a timestamp attribute, helping optimize storage costs.",
        "question_type": "single-choice"
      },
      {
        "id": "Q562",
        "question": "Your DynamoDB table needs to be backed up regularly without affecting performance. Which feature provides continuous backups with point-in-time recovery?",
        "options": [
          "Manual Snapshots",
          "AWS Backup",
          "DynamoDB On-Demand Backup",
          "DynamoDB Point-in-Time Recovery (PITR)",
          "AWS Data Pipeline"
        ],
        "correct_answers": [3],
        "explanation": "DynamoDB Point-in-Time Recovery (PITR) provides continuous backups of your table data, allowing you to restore to any second within the last 35 days.",
        "question_type": "single-choice"
      },
      {
        "id": "Q563",
        "question": "You need to migrate data from an on-premises MongoDB database to DynamoDB. Which AWS service can facilitate this migration with minimal downtime?",
        "options": [
          "AWS Database Migration Service (DMS)",
          "AWS Data Pipeline",
          "AWS Glue",
          "Amazon Kinesis Data Firehose",
          "AWS Snowball"
        ],
        "correct_answers": [0],
        "explanation": "AWS Database Migration Service (DMS) supports migrating data from MongoDB to DynamoDB with minimal downtime and data loss.",
        "question_type": "single-choice"
      },
      {
        "id": "Q564",
        "question": "A gaming application needs to maintain player session state across multiple EC2 instances. Which AWS service is suitable for storing session data in a serverless and scalable manner?",
        "options": [
          "Amazon ElastiCache",
          "Amazon EFS",
          "Amazon DynamoDB",
          "Amazon S3",
          "AWS Glue"
        ],
        "correct_answers": [2],
        "explanation": "Amazon DynamoDB is suitable for storing session data due to its low latency, scalability, and serverless nature.",
        "question_type": "single-choice"
      },
      {
        "id": "Q565",
        "question": "Your application performs a scan operation on a large DynamoDB table, but you want to reduce the read capacity units (RCUs) consumed. Which strategy can help you optimize the scan operation?",
        "options": [
          "Use Parallel Scan",
          "Implement Exponential Backoff",
          "Use a ProjectionExpression to retrieve only required attributes",
          "Increase the Provisioned Throughput",
          "Switch to On-Demand Capacity Mode"
        ],
        "correct_answers": [2],
        "explanation": "Using a ProjectionExpression to retrieve only required attributes reduces the amount of data read, thereby reducing RCUs consumed during a scan.",
        "question_type": "single-choice"
      },
      {
        "id": "Q566",
        "question": "You need to perform a batch write operation to DynamoDB, but you also need to ensure that either all writes succeed or none do. Which DynamoDB feature should you use?",
        "options": [
          "BatchWriteItem",
          "TransactWriteItems",
          "PutItem with Conditional Writes",
          "UpdateItem with Atomic Counters",
          "DynamoDB Streams"
        ],
        "correct_answers": [1],
        "explanation": "TransactWriteItems provides transactional, all-or-nothing batch write operations across multiple items and tables.",
        "question_type": "single-choice"
      },
      {
        "id": "Q567",
        "question": "An application needs to retrieve items from DynamoDB based on non-key attributes and requires strong consistency. Which operation should you use?",
        "options": [
          "Query with Strongly Consistent Read",
          "Scan with Strongly Consistent Read",
          "GetItem with Eventually Consistent Read",
          "BatchGetItem",
          "Use a Global Secondary Index"
        ],
        "correct_answers": [1],
        "explanation": "Scan operation can retrieve items based on non-key attributes, and specifying Strongly Consistent Read ensures data consistency.",
        "question_type": "single-choice"
      },
      {
        "id": "Q568",
        "question": "Your team wants to use a SQL-like syntax to query DynamoDB tables for easier data manipulation. Which feature allows you to use SQL-compatible queries with DynamoDB?",
        "options": [
          "DynamoDB Streams",
          "PartiQL",
          "AWS Glue Data Catalog",
          "Amazon Athena",
          "DynamoDB Accelerator (DAX)"
        ],
        "correct_answers": [1],
        "explanation": "PartiQL is a SQL-compatible query language that allows you to query and manipulate DynamoDB tables using SQL-like syntax.",
        "question_type": "single-choice"
      },
      {
        "id": "Q569",
        "question": "An application needs to generate unique identifiers for items in a DynamoDB table. Which DynamoDB data type allows you to store universally unique identifiers (UUIDs)?",
        "options": [
          "String",
          "Number",
          "Binary",
          "Map",
          "List"
        ],
        "correct_answers": [0],
        "explanation": "UUIDs are typically stored as String data types in DynamoDB tables to ensure uniqueness across items.",
        "question_type": "single-choice"
      },
      {
        "id": "Q570",
        "question": "You have a DynamoDB table with a large number of small items, and you need to reduce storage costs. Which DynamoDB table class can help achieve cost savings for infrequently accessed data?",
        "options": [
          "Standard Table Class",
          "Infrequent Access Table Class",
          "Archive Table Class",
          "On-Demand Table Class",
          "Provisioned Table Class"
        ],
        "correct_answers": [1],
        "explanation": "The Infrequent Access (IA) Table Class is designed for tables with infrequent access patterns, offering lower storage costs.",
        "question_type": "single-choice"
      },
      {
        "id": "Q571",
        "question": "An application needs to read a large item (over 400 KB) from DynamoDB. What should you consider when designing your data model to handle large items?",
        "options": [
          "Use BatchGetItem to retrieve large items",
          "Split the item into smaller items and use pagination",
          "Store large objects in S3 and reference them in DynamoDB",
          "Increase the RCUs for the table",
          "Use Global Secondary Indexes for large items"
        ],
        "correct_answers": [2],
        "explanation": "Since DynamoDB items have a maximum size of 400 KB, it's recommended to store large objects in S3 and reference them in DynamoDB to handle large data.",
        "question_type": "single-choice"
      },
      {
        "id": "Q572",
        "question": "You need to perform analytics on data stored in DynamoDB using standard SQL queries. Which AWS service can you use to query DynamoDB data directly with SQL?",
        "options": [
          "Amazon Athena",
          "AWS Glue",
          "Amazon Redshift Spectrum",
          "AWS Data Pipeline",
          "Amazon EMR"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Athena supports querying data stored in DynamoDB using standard SQL, enabling you to perform analytics without moving data.",
        "question_type": "single-choice"
      },
      {
        "id": "Q573",
        "question": "An application requires immediate consistency when reading data after a write operation in DynamoDB. How can you achieve this?",
        "options": [
          "Use Eventually Consistent Reads",
          "Enable DynamoDB Streams",
          "Use Strongly Consistent Reads",
          "Implement a caching layer",
          "Use Global Tables"
        ],
        "correct_answers": [2],
        "explanation": "Using Strongly Consistent Reads ensures that a read operation immediately reflects the results of a write operation, providing immediate consistency.",
        "question_type": "single-choice"
      },
      {
        "id": "Q574",
        "question": "Your application needs to update multiple attributes of an item in DynamoDB atomically. Which operation should you use?",
        "options": [
          "PutItem",
          "UpdateItem",
          "BatchWriteItem",
          "TransactWriteItems",
          "Conditional Writes"
        ],
        "correct_answers": [1],
        "explanation": "UpdateItem allows you to update multiple attributes of a single item atomically in DynamoDB.",
        "question_type": "single-choice"
      },
      {
        "id": "Q575",
        "question": "You need to enforce that an item in DynamoDB should not be overwritten if it already exists. Which condition expression should you use in your write operation?",
        "options": [
          "attribute_exists()",
          "attribute_not_exists()",
          "contains()",
          "begins_with()",
          "size()"
        ],
        "correct_answers": [1],
        "explanation": "Using attribute_not_exists() in a condition expression ensures that the write operation only succeeds if the item does not already exist, preventing overwrites.",
        "question_type": "single-choice"
      },
      {
        "id": "Q576",
        "question": "An application experiences throttling due to exceeding provisioned throughput on a DynamoDB table. What is a recommended way to handle these exceptions?",
        "options": [
          "Implement Exponential Backoff in retries",
          "Increase the provisioned throughput",
          "Use Scan instead of Query",
          "Switch to On-Demand Capacity Mode",
          "Reduce item sizes"
        ],
        "correct_answers": [0],
        "explanation": "Implementing Exponential Backoff in retries helps to handle ProvisionedThroughputExceeded exceptions by gradually increasing the delay between retries.",
        "question_type": "single-choice"
      },
      {
        "id": "Q577",
        "question": "You need to copy data from one DynamoDB table to another in the same AWS account. Which method provides the most efficient way to achieve this?",
        "options": [
          "Use AWS Data Pipeline",
          "Manually read and write each item",
          "Use AWS Glue ETL job",
          "Export and Import via S3",
          "Use DynamoDB Streams"
        ],
        "correct_answers": [0],
        "explanation": "AWS Data Pipeline provides a managed service to copy data between DynamoDB tables efficiently within the same account.",
        "question_type": "single-choice"
      },
      {
        "id": "Q578",
        "question": "Your application needs to process a large number of writes to DynamoDB with minimal latency. Which write capacity mode should you choose for cost-effectiveness and performance?",
        "options": [
          "Provisioned Capacity Mode",
          "On-Demand Capacity Mode",
          "Reserved Capacity",
          "Burst Capacity",
          "Auto Scaling Capacity Mode"
        ],
        "correct_answers": [0],
        "explanation": "Provisioned Capacity Mode is more cost-effective for predictable high-throughput workloads, allowing you to specify the required write capacity units.",
        "question_type": "single-choice"
      },
      {
        "id": "Q579",
        "question": "An application needs to perform a query on a DynamoDB table to find items where the sort key begins with a specific prefix. Which query operator should you use?",
        "options": [
          "=",
          "between",
          "begins_with",
          "contains",
          ">="
        ],
        "correct_answers": [2],
        "explanation": "The begins_with operator is used in DynamoDB queries to match items where the sort key starts with a specified prefix.",
        "question_type": "single-choice"
      },
      {
        "id": "Q580",
        "question": "You have enabled DynamoDB Streams on your table and want to trigger an AWS Lambda function whenever new items are inserted. What should you configure to achieve this?",
        "options": [
          "Create an EventBridge rule",
          "Configure a Stream Specification",
          "Set up an Event Source Mapping between DynamoDB Streams and Lambda",
          "Enable DynamoDB Accelerator (DAX)",
          "Use AWS Step Functions"
        ],
        "correct_answers": [2],
        "explanation": "Setting up an Event Source Mapping between DynamoDB Streams and Lambda allows Lambda to poll the stream and invoke your function when new records are available.",
        "question_type": "single-choice"
      },
      {
        "id": "Q581",
        "question": "An application needs to maintain an audit log of all changes to a DynamoDB table. Which feature can help you capture these changes for auditing purposes?",
        "options": [
          "DynamoDB Streams",
          "Time To Live (TTL)",
          "Global Secondary Indexes",
          "Conditional Writes",
          "DynamoDB Accelerator (DAX)"
        ],
        "correct_answers": [0],
        "explanation": "DynamoDB Streams capture item-level modifications, allowing you to keep an audit log of all changes to the table.",
        "question_type": "single-choice"
      },
      {
        "id": "Q582",
        "question": "You need to calculate the required write capacity units (WCUs) for a DynamoDB table where each item is 2 KB, and you expect to perform 100 writes per second. How many WCUs do you need?",
        "options": [
          "100 WCUs",
          "200 WCUs",
          "50 WCUs",
          "150 WCUs",
          "400 WCUs"
        ],
        "correct_answers": [1],
        "explanation": "Each 1 KB of an item requires 1 WCU. Since items are 2 KB, you need 2 WCUs per write. Therefore, 100 writes per second * 2 WCUs = 200 WCUs.",
        "question_type": "single-choice"
      },
      {
        "id": "Q583",
        "question": "An e-commerce application needs to store user cart information and requires the ability to handle sudden spikes in traffic during sales. Which DynamoDB capacity mode is most appropriate?",
        "options": [
          "Provisioned Capacity Mode with Auto Scaling",
          "On-Demand Capacity Mode",
          "Reserved Capacity",
          "Provisioned Capacity Mode without Auto Scaling",
          "Burst Capacity Mode"
        ],
        "correct_answers": [1],
        "explanation": "On-Demand Capacity Mode is suitable for applications with unpredictable traffic patterns, automatically scaling to handle sudden spikes.",
        "question_type": "single-choice"
      },
      {
        "id": "Q584",
        "question": "You need to create a DynamoDB table that can be queried efficiently by user ID and order date. Which key structure should you choose?",
        "options": [
          "Partition Key: user_id",
          "Partition Key: order_date",
          "Partition Key: user_id, Sort Key: order_date",
          "Partition Key: order_date, Sort Key: user_id",
          "Partition Key: order_id"
        ],
        "correct_answers": [2],
        "explanation": "Using user_id as the partition key and order_date as the sort key allows you to query all orders for a user and sort them by date efficiently.",
        "question_type": "single-choice"
      },
      {
        "id": "Q585",
        "question": "Your application is experiencing uneven read traffic, causing certain partitions in DynamoDB to become hot. What is one way to mitigate this issue?",
        "options": [
          "Increase RCUs for the table",
          "Use a Randomized Partition Key Suffix",
          "Implement Conditional Writes",
          "Enable DynamoDB Streams",
          "Use Global Secondary Indexes"
        ],
        "correct_answers": [1],
        "explanation": "Using a Randomized Partition Key Suffix (Write Sharding) helps distribute the read and write traffic more evenly across partitions.",
        "question_type": "single-choice"
      },
      {
        "id": "Q586",
        "question": "An application needs to access DynamoDB within a VPC without traversing the public Internet. How can you achieve this?",
        "options": [
          "Use a NAT Gateway",
          "Create a VPC Endpoint for DynamoDB",
          "Enable DynamoDB Streams",
          "Use a VPN Connection",
          "Configure a Direct Connect connection"
        ],
        "correct_answers": [1],
        "explanation": "Creating a VPC Endpoint for DynamoDB allows your VPC resources to access DynamoDB without using the public Internet.",
        "question_type": "single-choice"
      },
      {
        "id": "Q587",
        "question": "You need to update an attribute in a DynamoDB item only if the current value matches a specific condition. Which DynamoDB feature allows you to specify this condition?",
        "options": [
          "UpdateItem with ReturnValues",
          "Conditional Expressions",
          "Atomic Counters",
          "TransactWriteItems",
          "BatchWriteItem"
        ],
        "correct_answers": [1],
        "explanation": "Conditional Expressions in DynamoDB allow you to specify conditions that must be met for the update operation to succeed.",
        "question_type": "single-choice"
      },
      {
        "id": "Q588",
        "question": "An application needs to read from a DynamoDB table using multiple threads to increase performance. Which operation allows you to divide a scan task among multiple workers?",
        "options": [
          "Parallel Scan",
          "BatchGetItem",
          "Query with Strong Consistency",
          "Use Global Secondary Indexes",
          "Implement Exponential Backoff"
        ],
        "correct_answers": [0],
        "explanation": "Parallel Scan allows you to divide a scan operation into multiple segments, which can be processed by multiple threads or workers in parallel.",
        "question_type": "single-choice"
      },
      {
        "id": "Q589",
        "question": "Your application requires immediate propagation of data changes across all regions for a globally distributed application. Which DynamoDB feature supports this requirement?",
        "options": [
          "DynamoDB Streams",
          "Global Tables",
          "Local Secondary Indexes",
          "Conditional Writes",
          "DynamoDB Accelerator (DAX)"
        ],
        "correct_answers": [1],
        "explanation": "Global Tables in DynamoDB provide multi-region replication with eventual consistency, ensuring data is available across all specified regions.",
        "question_type": "single-choice"
      },
      {
        "id": "Q590",
        "question": "An item in your DynamoDB table has attributes of different data types, including strings, numbers, and lists. Which DynamoDB data type should you use to store a JSON document with varying structures?",
        "options": [
          "String",
          "Number",
          "Map",
          "Binary",
          "Set"
        ],
        "correct_answers": [2],
        "explanation": "The Map data type in DynamoDB allows you to store nested data structures similar to JSON objects, accommodating varying attribute types.",
        "question_type": "single-choice"
      },
      {
        "id": "Q591",
        "question": "You need to store metadata for objects stored in Amazon S3 and require efficient queries on this metadata. How can you use DynamoDB to index S3 objects?",
        "options": [
          "Use S3 Event Notifications to trigger Lambda functions that update DynamoDB",
          "Store metadata as object tags in S3",
          "Use Amazon Athena to query S3",
          "Enable S3 Inventory",
          "Use AWS Glue to catalog S3 objects"
        ],
        "correct_answers": [0],
        "explanation": "Using S3 Event Notifications, you can trigger Lambda functions when objects are added or modified, which can then update DynamoDB with the metadata for efficient querying.",
        "question_type": "single-choice"
      },
      {
        "id": "Q592",
        "question": "Your application needs to perform conditional updates on items in DynamoDB and handle conflicts gracefully. Which concurrency control method should you use?",
        "options": [
          "Pessimistic Locking",
          "Optimistic Locking with Version Number",
          "Atomic Counters",
          "BatchWriteItem",
          "Global Secondary Indexes"
        ],
        "correct_answers": [1],
        "explanation": "Optimistic Locking with a version number attribute allows you to detect conflicting updates and handle them appropriately using conditional writes.",
        "question_type": "single-choice"
      },
      {
        "id": "Q593",
        "question": "An application needs to process high-frequency updates to a DynamoDB table, but you notice increased latency. How can you improve write performance while ensuring data consistency?",
        "options": [
          "Enable DynamoDB Streams",
          "Use BatchWriteItem",
          "Implement Exponential Backoff",
          "Use DynamoDB Accelerator (DAX)",
          "Switch to On-Demand Capacity Mode"
        ],
        "correct_answers": [1],
        "explanation": "Using BatchWriteItem allows you to group multiple write operations into a single request, improving performance and reducing latency.",
        "question_type": "single-choice"
      },
      {
        "id": "Q594",
        "question": "Your DynamoDB table has a partition key that is not sufficiently distributed, causing performance issues. What is a recommended practice to enhance data distribution across partitions?",
        "options": [
          "Use Local Secondary Indexes",
          "Add a Sort Key",
          "Use a Composite Partition Key",
          "Implement Write Sharding",
          "Increase Provisioned Throughput"
        ],
        "correct_answers": [3],
        "explanation": "Implementing Write Sharding by adding a random or calculated suffix to the partition key enhances data distribution across partitions.",
        "question_type": "single-choice"
      },
      {
        "id": "Q595",
        "question": "An application needs to perform aggregations and complex queries on DynamoDB data. Which AWS service can you use to index DynamoDB data for advanced search capabilities?",
        "options": [
          "Amazon OpenSearch Service",
          "Amazon Redshift",
          "AWS Glue",
          "Amazon Kinesis Data Streams",
          "AWS Data Pipeline"
        ],
        "correct_answers": [0],
        "explanation": "Amazon OpenSearch Service (formerly Elasticsearch Service) can index DynamoDB data, providing advanced search and aggregation capabilities.",
        "question_type": "single-choice"
      },
      {
        "id": "Q596",
        "question": "You need to calculate the number of read capacity units (RCUs) required for an eventually consistent read of items that are 6 KB in size, with a read rate of 100 reads per second. How many RCUs are needed?",
        "options": [
          "50 RCUs",
          "100 RCUs",
          "150 RCUs",
          "200 RCUs",
          "75 RCUs"
        ],
        "correct_answers": [0],
        "explanation": "Each 4 KB of data requires 1 RCU for eventually consistent reads. Since 6 KB rounds up to 8 KB, each read requires 2 RCUs. However, eventually consistent reads consume half the RCUs, so each read requires 1 RCU. Therefore, 100 reads per second * 1 RCU = 100 RCUs.",
        "question_type": "single-choice"
      },
      {
        "id": "Q597",
        "question": "An application requires high read throughput from DynamoDB but experiences read throttling. Which service can you use to cache DynamoDB reads and reduce the load on the database?",
        "options": [
          "Amazon ElastiCache",
          "DynamoDB Accelerator (DAX)",
          "Amazon CloudFront",
          "AWS Lambda",
          "Amazon S3"
        ],
        "correct_answers": [1],
        "explanation": "DynamoDB Accelerator (DAX) is an in-memory cache that reduces the load on DynamoDB by caching read operations, improving read throughput.",
        "question_type": "single-choice"
      },
      {
        "id": "Q598",
        "question": "Your team wants to simulate and test DynamoDB applications locally without incurring AWS charges. Which tool can you use?",
        "options": [
          "DynamoDB Local",
          "AWS SAM",
          "AWS CloudFormation",
          "AWS Elastic Beanstalk",
          "AWS CodeDeploy"
        ],
        "correct_answers": [0],
        "explanation": "DynamoDB Local is a downloadable version of DynamoDB that you can run on your local machine for development and testing purposes.",
        "question_type": "single-choice"
      },
      {
        "id": "Q599",
        "question": "An application needs to scan a DynamoDB table but only retrieve specific attributes to minimize data transfer. Which parameter should you use in your scan operation?",
        "options": [
          "FilterExpression",
          "ProjectionExpression",
          "KeyConditionExpression",
          "ConditionExpression",
          "ExpressionAttributeNames"
        ],
        "correct_answers": [1],
        "explanation": "ProjectionExpression specifies the attributes you want to retrieve in your scan or query operation, minimizing data transfer and read capacity usage.",
        "question_type": "single-choice"
      },
      {
        "id": "Q600",
        "question": "You are designing a DynamoDB table and need to decide between using a Local Secondary Index (LSI) and a Global Secondary Index (GSI). Which statement about LSIs is true?",
        "options": [
          "LSIs can be created at any time after table creation",
          "LSIs have different partition keys than the base table",
          "LSIs share the provisioned throughput of the base table",
          "LSIs can have different sort keys than the base table",
          "LSIs require separate provisioned throughput settings"
        ],
        "correct_answers": [2],
        "explanation": "Local Secondary Indexes (LSIs) share the provisioned throughput of the base table and cannot have different partition keys; they can have different sort keys but must be defined at table creation.",
        "question_type": "single-choice"
      }
   ,
      {
        "id": "Q601",
        "question": "Your company wants to build a serverless API that triggers AWS Lambda functions to process data and store results in DynamoDB. Which AWS service should you use to create and manage the API?",
        "options": [
          "Amazon EC2",
          "Amazon API Gateway",
          "AWS CloudFront",
          "Amazon Elastic Beanstalk",
          "AWS AppSync"
        ],
        "correct_answers": [1],
        "explanation": "Amazon API Gateway allows you to create, publish, and manage APIs that can trigger AWS Lambda functions and integrate with other AWS services like DynamoDB.",
        "question_type": "single-choice"
      },
      {
        "id": "Q602",
        "question": "You need to secure your API Gateway endpoints so that only authenticated users can access them. Which AWS service can you use to manage user authentication and integrate with API Gateway?",
        "options": [
          "AWS IAM",
          "Amazon Cognito",
          "AWS WAF",
          "AWS Shield",
          "AWS KMS"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Cognito provides authentication, authorization, and user management for your web and mobile apps. It integrates with API Gateway to secure your APIs.",
        "question_type": "single-choice"
      },
      {
        "id": "Q603",
        "question": "Your development team wants to implement continuous integration and continuous delivery (CI/CD) for their application code stored in a Git repository. Which AWS service provides a fully managed source control service that hosts secure Git-based repositories?",
        "options": [
          "AWS CodeCommit",
          "AWS CodeBuild",
          "AWS CodeDeploy",
          "AWS CodePipeline",
          "Amazon S3"
        ],
        "correct_answers": [0],
        "explanation": "AWS CodeCommit is a fully managed source control service that hosts secure Git-based repositories, allowing teams to collaborate on code.",
        "question_type": "single-choice"
      },
      {
        "id": "Q604",
        "question": "You need to automate the build and test phases of your CI/CD pipeline for an application written in Java. Which AWS service can compile your source code, run tests, and produce software packages ready to deploy?",
        "options": [
          "AWS CodeDeploy",
          "AWS CodePipeline",
          "AWS CodeBuild",
          "AWS CodeCommit",
          "AWS CloudFormation"
        ],
        "correct_answers": [2],
        "explanation": "AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy.",
        "question_type": "single-choice"
      },
      {
        "id": "Q605",
        "question": "Your team wants to deploy new versions of their application to Amazon EC2 instances without any downtime. Which AWS service can automate the application deployment and support in-place and blue/green deployments?",
        "options": [
          "AWS CodePipeline",
          "AWS CodeDeploy",
          "AWS Elastic Beanstalk",
          "AWS CodeCommit",
          "AWS OpsWorks"
        ],
        "correct_answers": [1],
        "explanation": "AWS CodeDeploy automates application deployments to Amazon EC2 instances, supporting both in-place and blue/green deployment strategies.",
        "question_type": "single-choice"
      },
      {
        "id": "Q606",
        "question": "Your company wants to orchestrate the entire CI/CD pipeline, including source code retrieval, build, test, and deployment. Which AWS service can help you create a visual workflow for your pipeline?",
        "options": [
          "AWS CodeCommit",
          "AWS CodeBuild",
          "AWS CodePipeline",
          "AWS CodeDeploy",
          "AWS CodeStar"
        ],
        "correct_answers": [2],
        "explanation": "AWS CodePipeline is a continuous delivery service that helps you automate your release pipelines, allowing you to model, visualize, and automate the steps required to release your software.",
        "question_type": "single-choice"
      },
      {
        "id": "Q607",
        "question": "You need to perform code reviews and identify critical issues in your codebase automatically. Which AWS service uses machine learning to detect code defects and provide recommendations?",
        "options": [
          "AWS CodeCommit",
          "AWS CodeBuild",
          "AWS CodeGuru",
          "AWS CodeDeploy",
          "AWS CodePipeline"
        ],
        "correct_answers": [2],
        "explanation": "Amazon CodeGuru Reviewer uses machine learning to identify critical issues, security vulnerabilities, and hard-to-find bugs during code reviews.",
        "question_type": "single-choice"
      },
      {
        "id": "Q608",
        "question": "Your development team wants to develop and debug serverless applications using a browser-based IDE. Which AWS service provides a cloud-based IDE with support for serverless application development?",
        "options": [
          "AWS Cloud9",
          "AWS CodeStar",
          "AWS Lambda",
          "AWS SAM",
          "AWS CloudFormation"
        ],
        "correct_answers": [0],
        "explanation": "AWS Cloud9 is a cloud-based integrated development environment (IDE) that lets you write, run, and debug code with just a browser, and is preconfigured for serverless application development.",
        "question_type": "single-choice"
      },
      {
        "id": "Q609",
        "question": "You need to define your serverless application's infrastructure as code using YAML syntax, and you want to simplify the process of building and deploying serverless applications. Which AWS framework should you use?",
        "options": [
          "AWS CloudFormation",
          "AWS CDK",
          "AWS SAM",
          "AWS Elastic Beanstalk",
          "AWS CodeDeploy"
        ],
        "correct_answers": [2],
        "explanation": "AWS Serverless Application Model (SAM) is an open-source framework that extends AWS CloudFormation to simplify building and deploying serverless applications using YAML syntax.",
        "question_type": "single-choice"
      },
      {
        "id": "Q610",
        "question": "Your team prefers to define cloud infrastructure using familiar programming languages like Python or TypeScript. Which AWS service allows you to define cloud resources using code in these languages?",
        "options": [
          "AWS CloudFormation",
          "AWS CDK",
          "AWS SAM",
          "AWS CodeCommit",
          "AWS OpsWorks"
        ],
        "correct_answers": [1],
        "explanation": "AWS Cloud Development Kit (CDK) allows you to define cloud infrastructure using familiar programming languages like Python, JavaScript/TypeScript, Java, and .NET.",
        "question_type": "single-choice"
      },
      {
        "id": "Q611",
        "question": "You are deploying a REST API using API Gateway and want to ensure that it can handle traffic from clients globally with low latency. Which API Gateway endpoint type should you choose?",
        "options": [
          "Regional",
          "Edge-Optimized",
          "Private",
          "Global",
          "Local"
        ],
        "correct_answers": [1],
        "explanation": "Edge-Optimized endpoints are best for geographically distributed clients, as requests are routed to the nearest CloudFront edge location, reducing latency.",
        "question_type": "single-choice"
      },
      {
        "id": "Q612",
        "question": "Your API requires an API key for clients to access it, and you want to control the usage and throttle limits for each client. Which API Gateway feature allows you to achieve this?",
        "options": [
          "Resource Policies",
          "Usage Plans",
          "CORS Configuration",
          "Integration Responses",
          "Stage Variables"
        ],
        "correct_answers": [1],
        "explanation": "Usage Plans in API Gateway allow you to define who can access your APIs by associating them with API keys, and set throttling and quota limits for each client.",
        "question_type": "single-choice"
      },
      {
        "id": "Q613",
        "question": "You need to transform incoming requests and outgoing responses in API Gateway without changing the backend code. Which feature allows you to modify these payloads using mapping templates?",
        "options": [
          "Integration Types",
          "Lambda Authorizers",
          "Method Responses",
          "Mapping Templates with Velocity Template Language (VTL)",
          "Stage Variables"
        ],
        "correct_answers": [3],
        "explanation": "Mapping Templates in API Gateway use Velocity Template Language (VTL) to transform requests and responses without modifying backend code.",
        "question_type": "single-choice"
      },
      {
        "id": "Q614",
        "question": "Your web application is making AJAX requests to your API Gateway endpoint, but the browser is blocking the requests due to same-origin policy. How can you resolve this issue?",
        "options": [
          "Enable Cross-Origin Resource Sharing (CORS) on API Gateway",
          "Use a VPN connection",
          "Change the API Gateway endpoint type to Private",
          "Implement a custom domain name",
          "Use AWS WAF to allow the requests"
        ],
        "correct_answers": [0],
        "explanation": "Enabling CORS on API Gateway allows browsers to make cross-origin requests by providing the necessary headers in the preflight OPTIONS response.",
        "question_type": "single-choice"
      },
      {
        "id": "Q615",
        "question": "You want to create an API in API Gateway that integrates directly with AWS services, such as invoking an AWS Lambda function or putting an item into an Amazon SQS queue. Which integration type should you use?",
        "options": [
          "HTTP Integration",
          "Lambda Proxy Integration",
          "AWS Service Integration",
          "Mock Integration",
          "VPC Link Integration"
        ],
        "correct_answers": [2],
        "explanation": "AWS Service Integration in API Gateway allows you to integrate your API directly with AWS services by configuring the service action and any required parameters.",
        "question_type": "single-choice"
      },
      {
        "id": "Q616",
        "question": "Your team needs to test new API changes without affecting the production environment. Which API Gateway feature allows you to manage multiple versions and environments of your API?",
        "options": [
          "Resource Policies",
          "Stage Variables",
          "Deployment Stages",
          "Lambda Aliases",
          "Usage Plans"
        ],
        "correct_answers": [2],
        "explanation": "Deployment Stages in API Gateway allow you to manage multiple versions of your API (e.g., dev, test, prod), enabling you to test changes in isolation.",
        "question_type": "single-choice"
      },
      {
        "id": "Q617",
        "question": "You need to limit the number of API requests from clients to prevent your backend systems from being overwhelmed. Which API Gateway feature allows you to throttle requests at the stage or method level?",
        "options": [
          "Usage Plans",
          "Integration Responses",
          "Method Responses",
          "Resource Policies",
          "Caching"
        ],
        "correct_answers": [0],
        "explanation": "Usage Plans in API Gateway allow you to set throttling limits and quotas for individual clients, helping you control API usage and protect backend systems.",
        "question_type": "single-choice"
      },
      {
        "id": "Q618",
        "question": "Your application requires real-time two-way communication between the client and server over the WebSocket protocol. Which API Gateway feature supports this requirement?",
        "options": [
          "REST APIs",
          "HTTP APIs",
          "WebSocket APIs",
          "Lambda Integration",
          "Edge-Optimized Endpoints"
        ],
        "correct_answers": [2],
        "explanation": "API Gateway supports WebSocket APIs for real-time, two-way communication between clients and servers over the WebSocket protocol.",
        "question_type": "single-choice"
      },
      {
        "id": "Q619",
        "question": "You need to cache API responses to improve performance and reduce backend load. Which API Gateway feature allows you to enable caching for API responses?",
        "options": [
          "Integration Responses",
          "Method Responses",
          "Stage Variables",
          "API Gateway Caching",
          "Lambda Authorizers"
        ],
        "correct_answers": [3],
        "explanation": "API Gateway allows you to enable caching at the stage level, which caches responses for a specified TTL, improving performance and reducing backend load.",
        "question_type": "single-choice"
      },
      {
        "id": "Q620",
        "question": "Your API Gateway endpoint needs to be accessible only from within your VPC. Which endpoint type should you choose to restrict access accordingly?",
        "options": [
          "Edge-Optimized",
          "Regional",
          "Private",
          "Public",
          "Local"
        ],
        "correct_answers": [2],
        "explanation": "Private endpoints in API Gateway can only be accessed from within your VPC using an interface VPC endpoint, restricting access to internal clients.",
        "question_type": "single-choice"
      },
      {
        "id": "Q621",
        "question": "You need to deploy an API Gateway endpoint that integrates with a legacy HTTP web service running on-premises. You also want to apply rate limiting and authentication to the API. Which integration type should you use?",
        "options": [
          "AWS Integration",
          "HTTP Integration",
          "Lambda Integration",
          "Mock Integration",
          "AWS_PROXY Integration"
        ],
        "correct_answers": [1],
        "explanation": "HTTP Integration allows API Gateway to integrate with HTTP endpoints, including on-premises web services, and you can apply rate limiting and authentication.",
        "question_type": "single-choice"
      },
      {
        "id": "Q622",
        "question": "Your API Gateway needs to authorize requests using a third-party token-based authentication system. Which feature allows you to implement custom authorization logic using AWS Lambda functions?",
        "options": [
          "AWS IAM Authorization",
          "Lambda Authorizers",
          "Resource Policies",
          "Cognito User Pools",
          "API Keys"
        ],
        "correct_answers": [1],
        "explanation": "Lambda Authorizers (formerly Custom Authorizers) allow you to use AWS Lambda functions to implement custom authentication and authorization logic.",
        "question_type": "single-choice"
      },
      {
        "id": "Q623",
        "question": "Your company wants to build a CI/CD pipeline that automatically triggers code builds when code is pushed to AWS CodeCommit. Which AWS service can orchestrate this pipeline and manage the workflow?",
        "options": [
          "AWS CodeBuild",
          "AWS CodeDeploy",
          "AWS CodePipeline",
          "AWS CodeCommit",
          "AWS CodeStar"
        ],
        "correct_answers": [2],
        "explanation": "AWS CodePipeline is a continuous delivery service that orchestrates the build, test, and deployment phases of your application code every time there is a code change.",
        "question_type": "single-choice"
      },
      {
        "id": "Q624",
        "question": "Your team wants to use AWS CodeBuild to compile their source code, but they require a specific build environment that's not provided by the prepackaged images. How can they specify a custom build environment?",
        "options": [
          "Use a Lambda function to customize the environment",
          "Modify the buildspec.yml file",
          "Provide a custom Docker image",
          "Use AWS CloudFormation to define the environment",
          "Use AWS CodeDeploy to install dependencies"
        ],
        "correct_answers": [2],
        "explanation": "AWS CodeBuild allows you to specify a custom Docker image to define your own build environment with the necessary tools and configurations.",
        "question_type": "single-choice"
      },
      {
        "id": "Q625",
        "question": "Your application is running on EC2 instances behind an Auto Scaling group, and you need to deploy new application versions without downtime. Which AWS service and deployment type should you use?",
        "options": [
          "AWS CodeDeploy with In-Place Deployment",
          "AWS Elastic Beanstalk with All at Once Deployment",
          "AWS CodeDeploy with Blue/Green Deployment",
          "AWS CodePipeline with Rolling Deployment",
          "AWS CodeBuild with Immutable Deployment"
        ],
        "correct_answers": [2],
        "explanation": "AWS CodeDeploy with Blue/Green Deployment creates a new set of instances with the new application version and reroutes traffic, enabling zero-downtime deployments.",
        "question_type": "single-choice"
      },
      {
        "id": "Q626",
        "question": "Your company wants to use AWS CodeCommit for source control but also wants to restrict access to the repositories based on user roles. How can you manage permissions for CodeCommit repositories?",
        "options": [
          "Use GitHub permissions",
          "Configure IAM policies for users and roles",
          "Set up access control lists (ACLs)",
          "Use CodeCommit resource policies",
          "Implement security groups"
        ],
        "correct_answers": [1],
        "explanation": "You can manage access to AWS CodeCommit repositories using IAM policies attached to users and roles, controlling permissions at a granular level.",
        "question_type": "single-choice"
      },
      {
        "id": "Q627",
        "question": "Your team needs to define build instructions for AWS CodeBuild. Where should they specify the commands to install dependencies, run tests, and package the application?",
        "options": [
          "In the buildspec.yml file",
          "In the AWS CodeBuild console",
          "In the Dockerfile",
          "In the appspec.yml file",
          "In the CodePipeline configuration"
        ],
        "correct_answers": [0],
        "explanation": "The buildspec.yml file defines the build commands and settings used by AWS CodeBuild to run your build, including installing dependencies, running tests, and packaging.",
        "question_type": "single-choice"
      },
      {
        "id": "Q628",
        "question": "You need to automate the deployment of your serverless application defined using AWS SAM templates. Which AWS service can you use to deploy the application and manage the CloudFormation stack?",
        "options": [
          "AWS CodeDeploy",
          "AWS CloudFormation",
          "AWS SAM CLI",
          "AWS CodePipeline",
          "AWS CodeBuild"
        ],
        "correct_answers": [2],
        "explanation": "AWS SAM CLI provides commands to build, test, and deploy serverless applications defined using AWS SAM templates, and manages the underlying CloudFormation stack.",
        "question_type": "single-choice"
      },
      {
        "id": "Q629",
        "question": "Your development team prefers to write infrastructure code in TypeScript and wants to define cloud resources using this language. Which AWS service allows them to do this and generates CloudFormation templates from the code?",
        "options": [
          "AWS CDK",
          "AWS SAM",
          "AWS CloudFormation",
          "AWS CodeCommit",
          "AWS OpsWorks"
        ],
        "correct_answers": [0],
        "explanation": "AWS Cloud Development Kit (CDK) allows you to define cloud infrastructure using familiar programming languages like TypeScript, and generates CloudFormation templates.",
        "question_type": "single-choice"
      },
      {
        "id": "Q630",
        "question": "You need to perform load testing on your application after deployment but before it goes live. Which AWS CodePipeline feature allows you to add manual approvals or external actions in the pipeline?",
        "options": [
          "Artifacts",
          "Pipeline Actions",
          "Stages",
          "Manual Approval Action",
          "EventBridge Integration"
        ],
        "correct_answers": [3],
        "explanation": "Manual Approval Actions in AWS CodePipeline allow you to pause the pipeline execution until a manual approval is given, enabling you to perform tests before proceeding.",
        "question_type": "single-choice"
      },
      {
        "id": "Q631",
        "question": "Your team wants to manage software dependencies and share packages across multiple applications securely. Which AWS service provides a secure, scalable, and cost-effective artifact management system?",
        "options": [
          "AWS CodeCommit",
          "AWS CodeArtifact",
          "AWS CodeBuild",
          "AWS CodeDeploy",
          "Amazon S3"
        ],
        "correct_answers": [1],
        "explanation": "AWS CodeArtifact is a fully managed artifact repository service that makes it easy to securely store, publish, and share software packages used in your software development process.",
        "question_type": "single-choice"
      },
      {
        "id": "Q632",
        "question": "You want to monitor the performance of your production application and identify code inefficiencies. Which AWS service uses machine learning to profile application performance and provide optimization recommendations?",
        "options": [
          "AWS X-Ray",
          "Amazon CloudWatch",
          "AWS CodeGuru Profiler",
          "AWS CloudTrail",
          "AWS CodeDeploy"
        ],
        "correct_answers": [2],
        "explanation": "AWS CodeGuru Profiler helps you find your application's most expensive lines of code by profiling your application and providing recommendations to optimize performance.",
        "question_type": "single-choice"
      },
      {
        "id": "Q633",
        "question": "Your Lambda function needs to have different configurations for development and production environments. Which AWS SAM feature allows you to manage multiple environments with different parameters?",
        "options": [
          "SAM Accelerate",
          "Samconfig.toml",
          "SAM Policy Templates",
          "AWS CloudFormation Parameters",
          "Lambda Aliases"
        ],
        "correct_answers": [1],
        "explanation": "Samconfig.toml is a configuration file for AWS SAM CLI that allows you to define multiple environments and manage parameters for each, facilitating deployments to different environments.",
        "question_type": "single-choice"
      },
      {
        "id": "Q634",
        "question": "Your team is using AWS CDK to define cloud infrastructure but wants to test the generated CloudFormation templates. Which CDK feature allows you to synthesize the templates and perform assertions in tests?",
        "options": [
          "cdk deploy",
          "cdk synth",
          "cdk bootstrap",
          "cdk init",
          "cdk diff"
        ],
        "correct_answers": [1],
        "explanation": "The 'cdk synth' command synthesizes your CDK application and produces a CloudFormation template, which you can use in tests to perform assertions.",
        "question_type": "single-choice"
      },
      {
        "id": "Q635",
        "question": "You need to ensure that your API Gateway returns a 400 Bad Request response when required query parameters are missing from a client request. Which API Gateway feature can validate incoming requests before passing them to the backend?",
        "options": [
          "Method Responses",
          "Request Validation",
          "Integration Responses",
          "Lambda Authorizers",
          "Resource Policies"
        ],
        "correct_answers": [1],
        "explanation": "Request Validation in API Gateway allows you to configure basic validation of required parameters and payloads, returning a 400 Bad Request if validation fails.",
        "question_type": "single-choice"
      },
      {
        "id": "Q636",
        "question": "Your API needs to integrate with an AWS Lambda function, and you want the Lambda function to receive the full request details, including headers and query parameters, without mapping templates. Which integration type should you choose?",
        "options": [
          "Lambda Integration",
          "Lambda Proxy Integration",
          "AWS Integration",
          "HTTP Integration",
          "Mock Integration"
        ],
        "correct_answers": [1],
        "explanation": "Lambda Proxy Integration passes the entire request to the Lambda function, including headers and query parameters, without the need for mapping templates.",
        "question_type": "single-choice"
      },
      {
        "id": "Q637",
        "question": "Your API Gateway is experiencing high latency, and you want to monitor the time it takes for your backend to process requests. Which CloudWatch metric should you examine?",
        "options": [
          "Latency",
          "IntegrationLatency",
          "CacheHitCount",
          "Count",
          "4XXError"
        ],
        "correct_answers": [1],
        "explanation": "IntegrationLatency measures the time between when API Gateway relays a request to the backend and when it receives a response from the backend.",
        "question_type": "single-choice"
      },
      {
        "id": "Q638",
        "question": "You need to define environment variables for your Lambda functions and pass different values based on the API Gateway stage (dev, test, prod). Which feature allows you to achieve this?",
        "options": [
          "Stage Variables",
          "Lambda Aliases",
          "Mapping Templates",
          "Resource Policies",
          "Usage Plans"
        ],
        "correct_answers": [0],
        "explanation": "Stage Variables in API Gateway act like environment variables and can be used to pass configuration parameters to your Lambda functions based on the deployment stage.",
        "question_type": "single-choice"
      },
      {
        "id": "Q639",
        "question": "Your company wants to develop a new application but wants to accelerate the setup of the CI/CD pipeline and integrate with project management tools like JIRA. Which AWS service provides a unified interface to manage software development activities?",
        "options": [
          "AWS CodeStar",
          "AWS CodePipeline",
          "AWS CodeBuild",
          "AWS CodeCommit",
          "AWS CodeDeploy"
        ],
        "correct_answers": [0],
        "explanation": "AWS CodeStar provides a unified interface to manage your software development activities in one place, including integration with tools like JIRA and setting up CI/CD pipelines quickly.",
        "question_type": "single-choice"
      },
      {
        "id": "Q640",
        "question": "Your Lambda function needs to access a secure parameter stored in AWS Systems Manager Parameter Store during its build process. How can you reference this parameter securely in your buildspec.yml file for AWS CodeBuild?",
        "options": [
          "Store the parameter in plain text in the buildspec.yml",
          "Use environment variables in the buildspec.yml",
          "Reference the parameter using 'parameter-store' in the buildspec.yml",
          "Hardcode the parameter in the source code",
          "Use AWS KMS to encrypt the parameter"
        ],
        "correct_answers": [2],
        "explanation": "In buildspec.yml, you can reference secure parameters stored in AWS Systems Manager Parameter Store using the 'parameter-store' section under 'env'.",
        "question_type": "single-choice"
      },
      {
        "id": "Q641",
        "question": "You are using AWS CodeDeploy to deploy an application to EC2 instances. You want to run some scripts before the application is installed and after it's successfully deployed. Where should you specify these lifecycle hooks?",
        "options": [
          "In the buildspec.yml file",
          "In the appspec.yml file",
          "In the CodeDeploy console",
          "In the EC2 user data script",
          "In the deployment group configuration"
        ],
        "correct_answers": [1],
        "explanation": "Lifecycle hooks for AWS CodeDeploy deployments are specified in the appspec.yml file, where you can define pre-install and post-deploy scripts.",
        "question_type": "single-choice"
      },
      {
        "id": "Q642",
        "question": "Your organization wants to perform blue/green deployments for a serverless application using AWS SAM. Which AWS service is used under the hood to handle the deployment traffic shifting?",
        "options": [
          "AWS CodeDeploy",
          "AWS CodePipeline",
          "AWS Lambda",
          "AWS CloudFormation",
          "AWS Elastic Beanstalk"
        ],
        "correct_answers": [0],
        "explanation": "AWS SAM uses AWS CodeDeploy under the hood to perform blue/green deployments and handle traffic shifting for serverless applications.",
        "question_type": "single-choice"
      },
      {
        "id": "Q643",
        "question": "You need to enable detailed logging for API Gateway to troubleshoot an issue, and you want to see request and response payloads in CloudWatch Logs. Which log level should you set?",
        "options": [
          "ERROR",
          "INFO",
          "DEBUG",
          "WARN",
          "FATAL"
        ],
        "correct_answers": [2],
        "explanation": "Setting the log level to DEBUG in API Gateway enables detailed logging, including request and response payloads, which are sent to CloudWatch Logs.",
        "question_type": "single-choice"
      },
      {
        "id": "Q644",
        "question": "Your application uses AWS Lambda functions invoked by API Gateway, and you notice that some API calls are failing with 502 Bad Gateway errors. What could be a likely cause of this issue?",
        "options": [
          "Lambda function is returning an invalid response format",
          "API Gateway is throttling requests",
          "Client is sending invalid API keys",
          "Integration latency is too high",
          "CORS is not enabled on the API"
        ],
        "correct_answers": [0],
        "explanation": "A 502 Bad Gateway error in API Gateway often indicates that the backend Lambda function returned an invalid response format or failed to execute properly.",
        "question_type": "single-choice"
      },
      {
        "id": "Q645",
        "question": "Your organization wants to manage permissions for AWS CodeArtifact repositories and allow cross-account access. Which feature should you use to grant access to other AWS accounts?",
        "options": [
          "IAM Policies",
          "Resource Policies",
          "VPC Endpoints",
          "AWS Organizations",
          "Security Groups"
        ],
        "correct_answers": [1],
        "explanation": "Resource Policies in AWS CodeArtifact can be used to grant access to repositories to principals in other AWS accounts, enabling cross-account access.",
        "question_type": "single-choice"
      },
      {
        "id": "Q646",
        "question": "You are using AWS CodeGuru Reviewer to analyze your codebase. Which programming languages are currently supported by CodeGuru Reviewer for automated code reviews?",
        "options": [
          "Java and Python",
          "JavaScript and Ruby",
          "C# and Go",
          "PHP and Perl",
          "Swift and Kotlin"
        ],
        "correct_answers": [0],
        "explanation": "AWS CodeGuru Reviewer currently supports Java and Python programming languages for automated code reviews.",
        "question_type": "single-choice"
      },
      {
        "id": "Q647",
        "question": "Your application requires high availability and low latency for API requests across multiple regions. Which API Gateway feature allows you to replicate your APIs and configurations across regions automatically?",
        "options": [
          "Edge-Optimized Endpoints",
          "Regional Endpoints",
          "API Gateway doesn't support automatic cross-region replication",
          "Use AWS CloudFormation StackSets",
          "API Gateway Global Accelerator"
        ],
        "correct_answers": [2],
        "explanation": "API Gateway does not support automatic cross-region replication. You need to deploy your APIs in multiple regions manually or using tools like AWS CloudFormation or CDK.",
        "question_type": "single-choice"
      },
      {
        "id": "Q648",
        "question": "Your team wants to test AWS CDK applications locally without deploying to AWS. Which tool can you use to simulate and test CDK applications on your local machine?",
        "options": [
          "AWS Cloud9",
          "AWS SAM CLI",
          "AWS CDK CLI",
          "LocalStack",
          "AWS CloudFormation"
        ],
        "correct_answers": [3],
        "explanation": "LocalStack is a third-party tool that can simulate AWS services locally, allowing you to test CDK applications without deploying to AWS.",
        "question_type": "single-choice"
      },
      {
        "id": "Q649",
        "question": "You need to ensure that only authenticated IAM users within your AWS account can access your API Gateway. Which authorization method should you use?",
        "options": [
          "AWS IAM Authorization",
          "Lambda Authorizers",
          "Cognito User Pools",
          "API Keys",
          "Resource Policies"
        ],
        "correct_answers": [0],
        "explanation": "Using AWS IAM Authorization allows you to control access to your API Gateway for IAM users and roles within your AWS account, leveraging IAM policies and SigV4.",
        "question_type": "single-choice"
      },
      {
        "id": "Q650",
        "question": "Your company wants to automate the process of building, testing, and deploying Docker containers to Amazon ECR and ECS using AWS CodePipeline. Which AWS service can be used to build the Docker images in this pipeline?",
        "options": [
          "AWS CodeDeploy",
          "AWS CodeBuild",
          "AWS CodeCommit",
          "AWS Elastic Beanstalk",
          "AWS CloudFormation"
        ],
        "correct_answers": [1],
        "explanation": "AWS CodeBuild can be used to build Docker images as part of your CI/CD pipeline, and can push the built images to Amazon ECR.",
        "question_type": "single-choice"
      }
   ,
      {
        "id": "Q651",
        "question": "Your company wants to implement user authentication for a mobile application and allow users to sign in using their Google accounts. Which AWS service can provide this functionality with minimal custom code?",
        "options": [
          "AWS IAM",
          "Amazon Cognito User Pools",
          "AWS Directory Service",
          "AWS Single Sign-On",
          "Amazon Cognito Identity Pools"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Cognito User Pools provide user sign-up and sign-in functionality, including federation through social identity providers like Google.",
        "question_type": "single-choice"
      },
      {
        "id": "Q652",
        "question": "You need to provide temporary AWS credentials to authenticated users so they can access AWS resources directly from a mobile app. Which AWS service should you use?",
        "options": [
          "Amazon Cognito User Pools",
          "AWS STS",
          "Amazon Cognito Identity Pools",
          "AWS IAM Roles",
          "AWS KMS"
        ],
        "correct_answers": [2],
        "explanation": "Amazon Cognito Identity Pools enable you to provide temporary AWS credentials to users so they can access AWS services directly.",
        "question_type": "single-choice"
      },
      {
        "id": "Q653",
        "question": "Your application requires multi-factor authentication (MFA) for added security during user sign-in. Which AWS service allows you to enable MFA for your users with minimal effort?",
        "options": [
          "AWS IAM",
          "Amazon Cognito User Pools",
          "AWS Directory Service",
          "AWS KMS",
          "AWS Shield"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Cognito User Pools support multi-factor authentication (MFA) out of the box, allowing you to enhance security during user sign-in.",
        "question_type": "single-choice"
      },
      {
        "id": "Q654",
        "question": "You want to customize the user sign-up and sign-in experience by adding Lambda triggers during the authentication flow. Which AWS service provides this capability?",
        "options": [
          "Amazon Cognito User Pools",
          "AWS Lambda",
          "AWS IAM",
          "Amazon Cognito Identity Pools",
          "AWS Step Functions"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Cognito User Pools allow you to use Lambda triggers to customize various stages of the authentication flow, such as pre-sign-up and post-authentication.",
        "question_type": "single-choice"
      },
      {
        "id": "Q655",
        "question": "Your web application needs to authenticate users and provide them with a JSON Web Token (JWT) for accessing APIs secured by API Gateway. Which AWS service can issue these JWTs upon successful authentication?",
        "options": [
          "AWS IAM",
          "Amazon Cognito User Pools",
          "AWS KMS",
          "AWS STS",
          "AWS SSO"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Cognito User Pools authenticate users and issue JSON Web Tokens (JWTs) that can be used to secure APIs, such as those managed by API Gateway.",
        "question_type": "single-choice"
      },
      {
        "id": "Q656",
        "question": "You need to provide unauthenticated (guest) access to certain AWS resources from your mobile application. Which AWS service allows you to configure guest access and assign permissions accordingly?",
        "options": [
          "AWS IAM",
          "Amazon Cognito Identity Pools",
          "AWS STS",
          "Amazon Cognito User Pools",
          "AWS SSO"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Cognito Identity Pools allow you to define IAM roles for unauthenticated (guest) users, providing temporary AWS credentials with specified permissions.",
        "question_type": "single-choice"
      },
      {
        "id": "Q657",
        "question": "Your application requires users to be able to reset their passwords securely. Which AWS service provides built-in support for password resets, including email and phone number verification?",
        "options": [
          "AWS IAM",
          "Amazon Cognito User Pools",
          "AWS Directory Service",
          "AWS KMS",
          "Amazon SES"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Cognito User Pools support secure password reset functionality, including verification via email and phone number.",
        "question_type": "single-choice"
      },
      {
        "id": "Q658",
        "question": "You need to allow users to sign in to your application using their corporate identities managed in a SAML 2.0 compliant identity provider. Which AWS service enables this integration?",
        "options": [
          "Amazon Cognito Identity Pools",
          "AWS IAM",
          "Amazon Cognito User Pools",
          "AWS STS",
          "AWS Directory Service"
        ],
        "correct_answers": [2],
        "explanation": "Amazon Cognito User Pools support federation with SAML 2.0 compliant identity providers, allowing users to sign in using their corporate credentials.",
        "question_type": "single-choice"
      },
      {
        "id": "Q659",
        "question": "Your application needs to grant users access to AWS resources like S3 and DynamoDB directly from the client side after authentication. How can you achieve this securely?",
        "options": [
          "Use AWS IAM users for each application user",
          "Use Amazon Cognito Identity Pools to obtain temporary AWS credentials",
          "Embed AWS credentials in the application code",
          "Use AWS KMS to encrypt credentials",
          "Use AWS STS directly from the client application"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Cognito Identity Pools provide temporary AWS credentials to authenticated users, allowing secure access to AWS resources directly from client applications.",
        "question_type": "single-choice"
      },
      {
        "id": "Q660",
        "question": "You want to implement adaptive authentication in your application to add extra security measures when suspicious login attempts are detected. Which AWS service offers this feature?",
        "options": [
          "Amazon Cognito User Pools",
          "AWS IAM",
          "AWS WAF",
          "AWS Shield",
          "AWS GuardDuty"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Cognito User Pools offer adaptive authentication, which can prompt users for additional verification (like MFA) when suspicious login attempts are detected.",
        "question_type": "single-choice"
      },
      {
        "id": "Q661",
        "question": "Your mobile application needs to cache user credentials and synchronize data when the device is offline. Which AWS service provides client-side data synchronization capabilities for mobile apps?",
        "options": [
          "AWS AppSync",
          "AWS Amplify",
          "Amazon Cognito Sync",
          "Amazon S3",
          "AWS Lambda"
        ],
        "correct_answers": [1],
        "explanation": "AWS Amplify provides client-side libraries that enable offline data synchronization and caching of user credentials for mobile and web applications.",
        "question_type": "single-choice"
      },
      {
        "id": "Q662",
        "question": "You need to implement a custom authentication flow in your application using Amazon Cognito. Which feature allows you to define custom authentication challenges and responses?",
        "options": [
          "Cognito Identity Pools",
          "Lambda Triggers",
          "Cognito Hosted UI",
          "Adaptive Authentication",
          "MFA Settings"
        ],
        "correct_answers": [1],
        "explanation": "Lambda Triggers in Amazon Cognito User Pools allow you to implement custom authentication flows by defining custom challenges and responses.",
        "question_type": "single-choice"
      },
      {
        "id": "Q663",
        "question": "Your web application uses an Application Load Balancer (ALB) to distribute traffic. You want to offload user authentication to the ALB using Amazon Cognito. Which ALB feature enables this integration?",
        "options": [
          "Listener Rules",
          "Authenticate Cognito Action",
          "SSL Termination",
          "Cross-Zone Load Balancing",
          "Sticky Sessions"
        ],
        "correct_answers": [1],
        "explanation": "The Authenticate Cognito Action in ALB allows you to offload user authentication to Amazon Cognito User Pools, simplifying authentication management.",
        "question_type": "single-choice"
      },
      {
        "id": "Q664",
        "question": "You need to allow users to sign in using their Facebook accounts and access AWS resources directly. Which combination of AWS services should you use?",
        "options": [
          "Amazon Cognito User Pools and AWS IAM",
          "AWS IAM and AWS STS",
          "Amazon Cognito Identity Pools and Amazon Cognito User Pools",
          "Amazon Cognito Identity Pools and AWS IAM Roles",
          "AWS Directory Service and AWS IAM"
        ],
        "correct_answers": [3],
        "explanation": "Use Amazon Cognito Identity Pools to federate with Facebook and assign IAM roles to users for accessing AWS resources directly.",
        "question_type": "single-choice"
      },
      {
        "id": "Q665",
        "question": "Your application requires fine-grained access control to AWS resources based on the user's group membership. How can you achieve this using Amazon Cognito?",
        "options": [
          "Use AWS IAM policies with embedded user attributes",
          "Assign IAM roles to individual users",
          "Use Cognito Identity Pools with role-based access control",
          "Use Cognito User Pools with group-based IAM roles",
          "Implement custom authorization logic in the application"
        ],
        "correct_answers": [3],
        "explanation": "Amazon Cognito User Pools allow you to create groups and assign IAM roles to them, enabling fine-grained access control based on group membership.",
        "question_type": "single-choice"
      },
      {
        "id": "Q666",
        "question": "Your organization wants to maintain an on-premises Active Directory but allow users to sign in to AWS applications using their existing credentials. Which AWS service can help achieve this?",
        "options": [
          "AWS Directory Service AD Connector",
          "Amazon Cognito User Pools",
          "AWS IAM Identity Center",
          "AWS Single Sign-On",
          "AWS STS"
        ],
        "correct_answers": [0],
        "explanation": "AWS Directory Service AD Connector allows you to redirect directory requests to your on-premises Active Directory without caching any information in the cloud.",
        "question_type": "single-choice"
      },
      {
        "id": "Q667",
        "question": "You need to set up a custom domain for the Amazon Cognito Hosted UI to match your application's domain. What is a requirement for using a custom domain with Cognito?",
        "options": [
          "You must create an SSL certificate in ACM in any region",
          "You must create an SSL certificate in ACM in the us-east-1 region",
          "You must use a third-party SSL certificate",
          "You cannot use a custom domain with Cognito Hosted UI",
          "You must deploy a CloudFront distribution"
        ],
        "correct_answers": [1],
        "explanation": "To use a custom domain with Amazon Cognito Hosted UI, you must create an SSL certificate in AWS Certificate Manager (ACM) in the us-east-1 region.",
        "question_type": "single-choice"
      },
      {
        "id": "Q668",
        "question": "Your application requires users to verify their email addresses during sign-up. Which AWS service provides built-in support for email verification without additional configuration?",
        "options": [
          "Amazon SES",
          "AWS IAM",
          "Amazon Cognito User Pools",
          "AWS Lambda",
          "AWS SNS"
        ],
        "correct_answers": [2],
        "explanation": "Amazon Cognito User Pools provide built-in support for email verification during user sign-up, simplifying the verification process.",
        "question_type": "single-choice"
      },
      {
        "id": "Q669",
        "question": "You need to customize the messages sent to users during the sign-up and password reset processes. Which feature of Amazon Cognito allows you to achieve this?",
        "options": [
          "Lambda Triggers",
          "Custom Message Lambda Trigger",
          "Adaptive Authentication",
          "Hosted UI Customization",
          "User Pool Settings"
        ],
        "correct_answers": [1],
        "explanation": "The Custom Message Lambda Trigger in Amazon Cognito allows you to customize messages sent to users during various user pool operations.",
        "question_type": "single-choice"
      },
      {
        "id": "Q670",
        "question": "Your application needs to migrate users from an existing user directory to Amazon Cognito User Pools without forcing users to reset their passwords. Which Lambda trigger can help you achieve seamless migration?",
        "options": [
          "Pre Sign-up Lambda Trigger",
          "Post Confirmation Lambda Trigger",
          "Pre Authentication Lambda Trigger",
          "User Migration Lambda Trigger",
          "Custom Authentication Flow"
        ],
        "correct_answers": [3],
        "explanation": "The User Migration Lambda Trigger in Amazon Cognito allows you to migrate users from an existing user directory during the authentication process without requiring password resets.",
        "question_type": "single-choice"
      },
      {
        "id": "Q671",
        "question": "Your application is experiencing sign-in attempts from suspicious locations, and you want to increase security by blocking these attempts automatically. Which Amazon Cognito feature can help mitigate this risk?",
        "options": [
          "MFA Enforcement",
          "Adaptive Authentication",
          "IP Address Blocking",
          "Custom Authentication Flows",
          "Lambda Authorizers"
        ],
        "correct_answers": [1],
        "explanation": "Adaptive Authentication in Amazon Cognito can detect risky sign-in attempts based on factors like device, location, and IP address, and can automatically block or challenge these attempts.",
        "question_type": "single-choice"
      },
      {
        "id": "Q672",
        "question": "Your web application uses API Gateway with Amazon Cognito User Pools for authentication. How does API Gateway verify the user's identity when a request is made?",
        "options": [
          "By checking API keys",
          "By validating the JWT token provided by Cognito",
          "By querying the user pool directly",
          "By using AWS IAM roles",
          "By integrating with AWS STS"
        ],
        "correct_answers": [1],
        "explanation": "API Gateway uses the JWT token issued by Amazon Cognito User Pools to validate the user's identity and authorize access to APIs.",
        "question_type": "single-choice"
      },
      {
        "id": "Q673",
        "question": "You need to secure your serverless application's API endpoints with authentication and authorization, and you prefer not to write custom code. Which AWS service combination allows you to achieve this efficiently?",
        "options": [
          "AWS IAM and AWS Lambda",
          "AWS WAF and Amazon API Gateway",
          "Amazon Cognito User Pools and Amazon API Gateway",
          "AWS STS and AWS Lambda",
          "AWS KMS and AWS Lambda"
        ],
        "correct_answers": [2],
        "explanation": "Amazon Cognito User Pools provide user authentication, and when integrated with Amazon API Gateway, you can secure your API endpoints without writing custom authentication code.",
        "question_type": "single-choice"
      },
      {
        "id": "Q674",
        "question": "Your mobile application needs to perform real-time data synchronization and offline data access. Which AWS service can facilitate this with minimal backend code?",
        "options": [
          "AWS AppSync",
          "AWS Lambda",
          "Amazon DynamoDB",
          "AWS Step Functions",
          "Amazon S3"
        ],
        "correct_answers": [0],
        "explanation": "AWS AppSync is a managed GraphQL service that provides real-time data synchronization and offline data access, making it ideal for mobile applications.",
        "question_type": "single-choice"
      },
      {
        "id": "Q675",
        "question": "You need to integrate an OpenID Connect (OIDC) compliant identity provider with your application for user authentication. Which AWS service allows you to set up this integration?",
        "options": [
          "Amazon Cognito User Pools",
          "AWS IAM Identity Center",
          "AWS Directory Service",
          "AWS STS",
          "AWS KMS"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Cognito User Pools support federation with OIDC identity providers, allowing you to integrate external identity providers for user authentication.",
        "question_type": "single-choice"
      },
      {
        "id": "Q676",
        "question": "Your application uses Amazon Cognito User Pools for authentication. You need to add custom attributes to users, such as 'preferred_language'. How can you implement this?",
        "options": [
          "Use built-in attributes only",
          "Create custom attributes in the user pool",
          "Store custom attributes in a separate database",
          "Modify the JWT token directly",
          "Use Lambda to add attributes at runtime"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Cognito User Pools allow you to define custom attributes that can be assigned to users, such as 'preferred_language'.",
        "question_type": "single-choice"
      },
      {
        "id": "Q677",
        "question": "You want to audit user sign-in attempts and risk scores in Amazon Cognito. Which AWS service can you use to collect and analyze these logs?",
        "options": [
          "Amazon CloudWatch Logs",
          "AWS CloudTrail",
          "AWS Config",
          "AWS GuardDuty",
          "AWS CloudFormation"
        ],
        "correct_answers": [0],
        "explanation": "Amazon Cognito can send logs, including sign-in attempts and risk scores, to Amazon CloudWatch Logs for auditing and analysis.",
        "question_type": "single-choice"
      },
      {
        "id": "Q678",
        "question": "Your company requires that user passwords meet certain complexity requirements. How can you enforce password policies in Amazon Cognito User Pools?",
        "options": [
          "Implement a Lambda function to validate passwords",
          "Configure password policy settings in the user pool",
          "Enforce password policies in the client application",
          "Use AWS IAM password policies",
          "It's not possible to enforce password policies in Cognito"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Cognito User Pools allow you to configure password policies, including complexity requirements, directly in the user pool settings.",
        "question_type": "single-choice"
      },
      {
        "id": "Q679",
        "question": "You need to control access to AWS resources based on the user's attributes, such as their department. Which feature allows you to include user attributes in IAM policy conditions?",
        "options": [
          "IAM Roles with Session Tags",
          "Cognito Identity Pools with Role Mapping",
          "Lambda Authorizers",
          "AWS STS with AssumeRole",
          "IAM Policies with Embedded Attributes"
        ],
        "correct_answers": [1],
        "explanation": "Cognito Identity Pools allow you to map users to IAM roles based on their attributes, enabling you to control access to AWS resources using IAM policy conditions.",
        "question_type": "single-choice"
      },
      {
        "id": "Q680",
        "question": "Your application uses Amazon Cognito Identity Pools for authorization. You need to restrict access to S3 objects so that users can only access objects they own. Which IAM policy variable can you use?",
        "options": [
          "${aws:username}",
          "${cognito-identity.amazonaws.com:sub}",
          "${aws:userid}",
          "${s3:prefix}",
          "${cognito-identity.amazonaws.com:identitypool}"
        ],
        "correct_answers": [1],
        "explanation": "The policy variable '${cognito-identity.amazonaws.com:sub}' represents the unique identifier for the authenticated user and can be used to restrict access to resources they own.",
        "question_type": "single-choice"
      },
      {
        "id": "Q681",
        "question": "Your organization wants to implement a centralized identity solution that can provide SAML-based single sign-on (SSO) to multiple AWS accounts and business applications. Which AWS service should you consider?",
        "options": [
          "AWS Directory Service",
          "AWS Single Sign-On",
          "Amazon Cognito User Pools",
          "AWS IAM Identity Center",
          "AWS STS"
        ],
        "correct_answers": [1],
        "explanation": "AWS Single Sign-On (SSO) enables you to centrally manage SSO access to multiple AWS accounts and business applications using SAML 2.0.",
        "question_type": "single-choice"
      },
      {
        "id": "Q682",
        "question": "You are setting up an Amazon Cognito User Pool and need to ensure that only verified email addresses can sign in. Which setting should you configure?",
        "options": [
          "Set email as a required attribute",
          "Enable email verification in the User Pool settings",
          "Use a Lambda trigger to block unverified users",
          "Set MFA as required",
          "Disable phone number verification"
        ],
        "correct_answers": [1],
        "explanation": "Enabling email verification in the User Pool settings ensures that only users with verified email addresses can sign in.",
        "question_type": "single-choice"
      },
      {
        "id": "Q683",
        "question": "Your application needs to display a custom user interface for user sign-up and sign-in instead of the Amazon Cognito Hosted UI. How can you implement this?",
        "options": [
          "Use the AWS Amplify UI components",
          "Modify the Hosted UI with custom CSS",
          "Use Amazon Cognito Identity Pools",
          "Develop a custom UI and use the Cognito API",
          "It's not possible to have a custom UI with Cognito"
        ],
        "correct_answers": [3],
        "explanation": "You can develop a custom user interface and interact with Amazon Cognito User Pools using the Cognito API or AWS SDKs.",
        "question_type": "single-choice"
      },
      {
        "id": "Q684",
        "question": "You need to allow cross-account access to your Amazon Cognito User Pool. Which feature allows you to grant access to another AWS account to perform actions on your user pool?",
        "options": [
          "Cognito Resource Policies",
          "IAM Roles with Trust Policy",
          "Lambda Authorizers",
          "Identity Pool Role Mappings",
          "Cognito Identity Pools"
        ],
        "correct_answers": [1],
        "explanation": "You can use IAM roles with appropriate trust policies to allow cross-account access to your Amazon Cognito User Pool resources.",
        "question_type": "single-choice"
      },
      {
        "id": "Q685",
        "question": "Your application needs to securely store and manage user session data on the client side. Which AWS service provides client-side data storage and synchronization?",
        "options": [
          "AWS AppSync",
          "Amazon Cognito Sync",
          "AWS Amplify DataStore",
          "AWS S3",
          "Amazon DynamoDB"
        ],
        "correct_answers": [2],
        "explanation": "AWS Amplify DataStore provides client-side data storage and synchronization, allowing you to manage user session data securely on the client.",
        "question_type": "single-choice"
      },
      {
        "id": "Q686",
        "question": "Your application requires that users be automatically signed out after a period of inactivity. Which Amazon Cognito feature allows you to configure session timeout settings?",
        "options": [
          "Refresh Token Expiration",
          "Access Token Validity",
          "Idle Session Timeout",
          "Custom Lambda Triggers",
          "Token Revocation"
        ],
        "correct_answers": [1],
        "explanation": "Access Token Validity settings in Amazon Cognito allow you to define how long access tokens are valid, effectively controlling session timeout.",
        "question_type": "single-choice"
      },
      {
        "id": "Q687",
        "question": "You need to ensure that API requests made by your application are on behalf of authenticated users and include their identity information. Which AWS service helps you achieve this with minimal code changes?",
        "options": [
          "AWS STS",
          "Amazon Cognito Identity Pools",
          "Amazon Cognito User Pools with Identity Pools",
          "AWS IAM",
          "AWS Lambda"
        ],
        "correct_answers": [2],
        "explanation": "By integrating Amazon Cognito User Pools with Identity Pools, you can obtain AWS credentials that include user identity information, allowing API requests to be made on behalf of authenticated users.",
        "question_type": "single-choice"
      },
      {
        "id": "Q688",
        "question": "Your company uses AWS Organizations with multiple accounts. You need to centralize user authentication and allow users to access AWS resources across accounts. Which AWS service facilitates this setup?",
        "options": [
          "AWS Single Sign-On",
          "Amazon Cognito User Pools",
          "AWS Directory Service",
          "AWS STS",
          "AWS IAM Roles"
        ],
        "correct_answers": [0],
        "explanation": "AWS Single Sign-On allows you to centrally manage SSO access and user permissions across multiple AWS accounts in your organization.",
        "question_type": "single-choice"
      },
      {
        "id": "Q689",
        "question": "You want to implement passwordless authentication in your application using magic links sent via email. Which Amazon Cognito feature can help you implement this functionality?",
        "options": [
          "Custom Authentication Flow with Lambda Triggers",
          "Adaptive Authentication",
          "MFA Settings",
          "Hosted UI Customization",
          "Custom Message Lambda Trigger"
        ],
        "correct_answers": [0],
        "explanation": "By implementing a Custom Authentication Flow using Lambda Triggers in Amazon Cognito, you can create a passwordless authentication mechanism like magic links.",
        "question_type": "single-choice"
      },
      {
        "id": "Q690",
        "question": "Your application needs to comply with GDPR regulations, including the 'Right to be Forgotten'. How can you delete a user's data from Amazon Cognito User Pools?",
        "options": [
          "Use the AdminDeleteUser API",
          "Disable the user in the user pool",
          "Remove the user from all groups",
          "Revoke all tokens for the user",
          "It's not possible to delete user data from Cognito"
        ],
        "correct_answers": [0],
        "explanation": "Using the AdminDeleteUser API, you can delete a user's data from Amazon Cognito User Pools, complying with GDPR's 'Right to be Forgotten'.",
        "question_type": "single-choice"
      },
      {
        "id": "Q691",
        "question": "Your mobile application needs to authenticate users and also store application data that can be synchronized across devices. Which AWS service combination should you use?",
        "options": [
          "Amazon Cognito User Pools and AWS S3",
          "AWS AppSync and AWS DynamoDB",
          "Amazon Cognito User Pools and AWS AppSync",
          "AWS Amplify and Amazon Cognito Identity Pools",
          "AWS Lambda and Amazon S3"
        ],
        "correct_answers": [3],
        "explanation": "AWS Amplify provides libraries for authentication with Amazon Cognito Identity Pools and data synchronization features that can be used in mobile applications.",
        "question_type": "single-choice"
      },
      {
        "id": "Q692",
        "question": "You need to integrate Amazon Cognito with AWS KMS to encrypt sensitive data at rest in your user pool. Which Cognito feature allows you to specify a customer-managed CMK for encryption?",
        "options": [
          "Cognito Streams",
          "Encryption Context",
          "Cognito Encryption Settings",
          "Custom Authentication Flow",
          "Cognito User Pool Settings"
        ],
        "correct_answers": [4],
        "explanation": "In the Cognito User Pool Settings, you can specify a customer-managed CMK from AWS KMS to encrypt data at rest in your user pool.",
        "question_type": "single-choice"
      },
      {
        "id": "Q693",
        "question": "Your application needs to support sign-in with Amazon, Facebook, and Google accounts. Which AWS service simplifies the integration with these social identity providers?",
        "options": [
          "AWS IAM",
          "Amazon Cognito User Pools",
          "AWS Directory Service",
          "AWS STS",
          "AWS Lambda"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Cognito User Pools provide built-in support for federation with social identity providers like Amazon, Facebook, and Google.",
        "question_type": "single-choice"
      },
      {
        "id": "Q694",
        "question": "You need to pass custom claims in the ID token issued by Amazon Cognito User Pools to your application. Which Lambda trigger allows you to modify the token before it is issued?",
        "options": [
          "Pre Token Generation Lambda Trigger",
          "Post Confirmation Lambda Trigger",
          "Pre Authentication Lambda Trigger",
          "Custom Message Lambda Trigger",
          "User Migration Lambda Trigger"
        ],
        "correct_answers": [0],
        "explanation": "The Pre Token Generation Lambda Trigger allows you to customize the claims in the ID token before it is issued to the user.",
        "question_type": "single-choice"
      },
      {
        "id": "Q695",
        "question": "Your application requires users to accept updated terms and conditions before they can continue using the service. How can you enforce this in Amazon Cognito User Pools?",
        "options": [
          "Use a Pre Authentication Lambda Trigger",
          "Update the user pool policies",
          "Use Custom Authentication Flows",
          "Require MFA for all users",
          "Send an email to all users"
        ],
        "correct_answers": [0],
        "explanation": "A Pre Authentication Lambda Trigger can be used to check if the user has accepted the latest terms and conditions, and deny authentication if they haven't.",
        "question_type": "single-choice"
      },
      {
        "id": "Q696",
        "question": "Your company wants to monitor and limit the number of API calls made to Amazon Cognito to prevent abuse. Which AWS service can help you track API usage and set alarms?",
        "options": [
          "AWS CloudTrail",
          "Amazon CloudWatch",
          "AWS Config",
          "AWS Trusted Advisor",
          "AWS X-Ray"
        ],
        "correct_answers": [1],
        "explanation": "Amazon CloudWatch can be used to monitor API call metrics for Amazon Cognito and set alarms when thresholds are exceeded.",
        "question_type": "single-choice"
      },
      {
        "id": "Q697",
        "question": "Your application needs to handle high volumes of sign-in requests during peak hours. How does Amazon Cognito User Pools scale to meet demand?",
        "options": [
          "You need to manually provision additional capacity",
          "Cognito automatically scales to handle increased traffic",
          "You need to use AWS Lambda to manage scaling",
          "By integrating with AWS Auto Scaling",
          "Cognito does not support auto-scaling"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Cognito User Pools are serverless and automatically scale to handle increased traffic without the need for manual intervention.",
        "question_type": "single-choice"
      },
      {
        "id": "Q698",
        "question": "Your security team requires that all API calls to AWS services be made using temporary credentials. How does Amazon Cognito Identity Pools facilitate this requirement?",
        "options": [
          "By providing long-term IAM user credentials",
          "By using AWS STS to issue temporary credentials",
          "By integrating with AWS KMS for encryption",
          "By enforcing MFA on all users",
          "By storing credentials in AWS Secrets Manager"
        ],
        "correct_answers": [1],
        "explanation": "Amazon Cognito Identity Pools use AWS STS to issue temporary AWS credentials for authenticated users, meeting the requirement for temporary credentials.",
        "question_type": "single-choice"
      },
      {
        "id": "Q699",
        "question": "You need to audit and log all administrative actions performed on your Amazon Cognito User Pools. Which AWS service provides this capability?",
        "options": [
          "AWS CloudTrail",
          "Amazon CloudWatch Logs",
          "AWS Config",
          "AWS IAM Access Analyzer",
          "AWS Trusted Advisor"
        ],
        "correct_answers": [0],
        "explanation": "AWS CloudTrail records all API calls made to Amazon Cognito, allowing you to audit and log administrative actions on your user pools.",
        "question_type": "single-choice"
      },
      {
        "id": "Q700",
        "question": "Your application requires users to be automatically assigned to different IAM roles based on their group membership in the user pool. Which Amazon Cognito feature enables this functionality?",
        "options": [
          "Role Mapping in Identity Pools",
          "Group Role Mapping in User Pools",
          "Custom Lambda Triggers",
          "AWS IAM Policies",
          "Cognito Sync"
        ],
        "correct_answers": [0],
        "explanation": "Role Mapping in Amazon Cognito Identity Pools allows you to assign different IAM roles to users based on their group membership in the user pool.",
        "question_type": "single-choice"
      }
     

  ];