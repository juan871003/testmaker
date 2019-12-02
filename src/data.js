export const data = {
  "questionnaires": [
    {
      "id": 1,
      "title": "AWS Certified Developer - Practice",
      "questions": [
        {
          "topic": "IAM + EC2",
          "question": "What are the three main components of IAM",
          "options": [
            { "text": "Users, Groups, Roles", "isCorrect": true },
            { "text": "Users, People, Resources", "isCorrect": false },
            { "text": "Groups, Users, Permissions", "isCorrect": false },
            { "text": "Groups, Users, Policies", "isCorrect": false }
          ]
        },
        {
          "topic": "IAM + EC2",
          "question": "How do I export IAM roles to other regions",
          "options": [
            { "text": "IAM has a global view, Roles are reachable on any and all regions", "isCorrect": true },
            { "text": "Go to IAM service, click on 'Roles', edit Role, and change the region it belongs to", "isCorrect": false },
            { "text": "In the CLI, type 'edit-role --role-name MY-ROLE-NAME --region REAGION-ID", "isCorrect": false },
            { "text": "In the CLI, delete the role and re-created specifying the new region.", "isCorrect": false }
          ]
        },
        {
          "topic": "IAM + EC2",
          "question": "Select the true statements about IAM Federation",
          "options": [
            { "text": "IAM Federation is used on big enterprises to integrate their own repo of users to IAM", "isCorrect": true },
            { "text": "With IAM Federation you can use your company credentials to login into AWS", "isCorrect": true },
            { "text": "IAM Federation uses the SAML standard (Active Directory)", "isCorrect": true },
            { "text": "IAM Federation is used for multi-factor authentication", "isCorrect": false }
          ]
        },
        {
          "topic": "IAM + EC2",
          "question": "ap-northeast-1a is a:",
          "options": [
            { "text": "Availability Zone", "isCorrect": true },
            { "text": "Region", "isCorrect": false }
          ],
          "infoIfCorrect": "An AZ zone ends with a letter, whereas a region ends with a number (Region: ap-northeast-1, Availability Zone: ap-northeast-1a)"
        },
        {
          "topic": "IAM + EC2",
          "question": "Availability Zones are:",
          "options": [
            { "text": "in geographically isolated data centers", "isCorrect": true },
            { "text": "all together in one data center", "isCorrect": false }
          ],
          "infoIfCorrect": "this helps guarantee that multi AZ won't all fail at once (due to a meteorological disaster for example)"
        },
        {
          "topic": "IAM + EC2",
          "question": "All of these are IAM components except...:",
          "options": [
            { "text": "Organisations", "isCorrect": true },
            { "text": "Users", "isCorrect": false },
            { "text": "Roles", "isCorrect": false },
            { "text": "Policies", "isCorrect": false },
            { "text": "Groups", "isCorrect": false }
          ]
        },
        {
          "topic": "IAM + EC2",
          "question": "IAM Users are defined on a per-region basis",
          "options": [
            { "text": "false", "isCorrect": true },
            { "text": "true", "isCorrect": false }
          ],
          "infoIfCorrect": "IAM is a global service (encompasses all regions)"
        },
        {
          "topic": "IAM + EC2",
          "question": "An IAM user can belong to multiple groups",
          "options": [
            { "text": "true", "isCorrect": true },
            { "text": "false", "isCorrect": false }
          ]
        },
        {
          "topic": "IAM + EC2",
          "question": "You are getting started with AWS and your manager wants things to remain simple yet secure. He wants management of engineers to be easy, and not re-invent the wheel every time someone joins your company. What will you do?",
          "options": [
            { "text": "I'll create multiple IAM users and groups, and assign policies to groups. New users will be added to groups", "isCorrect": true },
            { "text": "I'll create multiple IAM users, and assign each user their own policy", "isCorrect": false },
            { "text": "I'll create one IAM user and everyone will share the credentials", "isCorrect": false }
          ]
        },
        {
          "topic": "IAM + EC2",
          "question": "You should share your IAM credentials with colleagues if they quickly need access to help you",
          "options": [
            { "text": "No", "isCorrect": true },
            { "text": "Yes", "isCorrect": false }
          ]
        },
        {
          "topic": "IAM + EC2",
          "question": "You pay for an EC2 instance compute component",
          "options": [
            { "text": "only when it's in 'running' state", "isCorrect": true },
            { "text": "if it's 'running' and 'stopped' state", "isCorrect": false }
          ]
        },
        {
          "topic": "IAM + EC2",
          "question": "You are getting a permission error exception when trying to SSH into your Linux Instance",
          "options": [
            { "text": "the key is missing permissions chmod 0400", "isCorrect": true },
            { "text": "The security group is misconfigured", "isCorrect": false },
            { "text": "the Linux instance is misconfigured", "isCorrect": false }
          ],
          "infoIfCorrect": "The exam expects you to know this, even if you used Windows / Putty to SSH into your instances. If you're a windows user, just have a quick look at the Linux SSH lecture!"
        },
        {
          "topic": "IAM + EC2",
          "question": "You are getting a network timeout when trying to SSH into your EC2 instance",
          "options": [
            { "text": "your security groups are misconfigured", "isCorrect": true },
            { "text": "your key is missing permissions", "isCorrect": false },
            { "text": "the linux instance is misconfigured", "isCorrect": false }
          ]
        },
        {
          "topic": "IAM + EC2",
          "question": "When a security group is created, what is the default behavior?",
          "options": [
            { "text": "Deny all traffic inbound and allow all traffic outbound", "isCorrect": true },
            { "text": "Allow all traffic inbound and allow all traffic outbound", "isCorrect": false },
            { "text": "Allow all traffic inbound and deny all traffic outbound", "isCorrect": false },
            { "text": "Deny all traffic inbound and deny all traffic outbound", "isCorrect": false }
          ]
        },
        {
          "topic": "IAM + EC2",
          "question": "Security groups can reference all of the following except:",
          "options": [
            { "text": "DNS name", "isCorrect": true },
            { "text": "Security Group", "isCorrect": false },
            { "text": "CIDR block", "isCorrect": false },
            { "text": "IP address", "isCorrect": false }
          ]
        },
        {
          "topic": "IAM + EC2",
          "question": "You want to provide startup instructions to your EC2 instances, you should be using",
          "options": [
            { "text": "EC2 User Data", "isCorrect": true },
            { "text": "EC2 Startup Data", "isCorrect": false },
            { "text": "EC2 Meta Data", "isCorrect": false }
          ]
        },
        {
          "topic": "IAM + EC2",
          "question": "You built and published an AMI in the ap-southeast-2 region, and your colleague in us-east-1 region cannot see it",
          "options": [
            { "text": "An AMI created for a region can only be seen in that region", "isCorrect": true },
            { "text": "Their IAM permissions are wrong", "isCorrect": false },
            { "text": "You need to share the AMI with them explicitly", "isCorrect": false }
          ]
        },
        {
          "topic": "ELB + ASG + EBS",
          "question": "Load Balancers provide a",
          "options": [
            { "text": "static DNS name we can use in our application", "isCorrect": true },
            { "text": "static IPv4 we can use in our application", "isCorrect": false },
            { "text": "static IPv6 we can use in our application", "isCorrect": false }
          ]
        },
        {
          "topic": "ELB + ASG + EBS",
          "question": "You are running a website with a load balancer and 10 EC2 instances. Your users are complaining about the fact that your website always asks them to re-authenticate when they switch pages. You are puzzled, because it's working just fine on your machine and in the dev environment with 1 server. What could be the reason?",
          "options": [
            { "text": "The Load Balancer does not have stickiness enabled", "isCorrect": true },
            { "text": "The EC2 instances log out users because they don't see their true IPs", "isCorrect": false },
            { "text": "The application must have a bug", "isCorrect": false }
          ]
        },
        {
          "topic": "ELB + ASG + EBS",
          "question": "Your application is using an Application Load Balancer. It turns out your application only sees traffic coming from private IP which are in fact your load balancer's. What should you do to find the true IP of the clients connected to your website?",
          "options": [
            { "text": "Look into the X-Forwarded-For header in the backend", "isCorrect": true },
            { "text": "Modify the front-end of the website so that the users send their IP in the requests", "isCorrect": false },
            { "text": "Look into the X-Forwarded-Proto header in the backend", "isCorrect": false }
          ]
        },
        {
          "topic": "ELB + ASG + EBS",
          "question": "You quickly created an ELB and it turns out your users are complaining about the fact that sometimes, the servers just don't work. You realise that indeed, your servers do crash from time to time. How to protect your users from seeing these crashes?",
          "options": [
            { "text": "Enable Health Checks", "isCorrect": true },
            { "text": "Enable Stickiness", "isCorrect": false },
            { "text": "Enable SSL Termination", "isCorrect": false }
          ]
        },
        {
          "topic": "ELB + ASG + EBS",
          "question": "You are designing a high performance application that will require millions of connections to be handled, as well as low latency. The best Load Balancer for this is",
          "options": [
            { "text": "Network Load Balancer", "isCorrect": true },
            { "text": "Classic Load Balancer", "isCorrect": false },
            { "text": "Application Load Balancer", "isCorrect": false }
          ]
        },
        {
          "topic": "ELB + ASG + EBS",
          "question": "Application Load Balancers handle all these protocols except",
          "options": [
            { "text": "TCP", "isCorrect": true },
            { "text": "Websocket", "isCorrect": false },
            { "text": "HTTPS", "isCorrect": false },
            { "text": "HTTP", "isCorrect": false }
          ]
        },
        {
          "topic": "ELB + ASG + EBS",
          "question": "The application load balancer can redirect to different target groups based on all these except...",
          "options": [
            { "text": "Client IP", "isCorrect": true },
            { "text": "Request Path", "isCorrect": false },
            { "text": "Hostname", "isCorrect": false }
          ]
        },
        {
          "topic": "ELB + ASG + EBS",
          "question": "You are running at desired capacity of 3 and the maximum capacity of 3. You have alarms set at 60% CPU to scale out your application. Your application is now running at 80% capacity. What will happen?",
          "options": [
            { "text": "Nothing", "isCorrect": true },
            { "text": "The desired capacity will go up to 4 and the maximum will stay at 3", "isCorrect": false },
            { "text": "The desired capacity will go up to 4 and the maximum will stay at 4", "isCorrect": false }
          ]
        },
        {
          "topic": "ELB + ASG + EBS",
          "question": "I have an ASG and an ALB, and I setup my ASG to get health status of instances thanks to my ALB. One instance has just been reported unhealthy. What will happen?",
          "options": [
            { "text": "The ASG will terminate the EC2 Instance", "isCorrect": true },
            { "text": "The ASG will detach the EC2 instance from the group, and leave it running", "isCorrect": false },
            { "text": "The ASG will keep the instance running and re-start the application", "isCorrect": false }
          ]
        },
        {
          "topic": "ELB + ASG + EBS",
          "question": "Your boss wants to scale your ASG based on the number of requests per minute your application makes to your database.",
          "options": [
            { "text": "You create a CloudWatch custom metric and build an alarm on this to scale your ASG", "isCorrect": true },
            { "text": "You politely tell him it's impossible", "isCorrect": false },
            { "text": "You enable detailed monitoring and use that to scale your ASG", "isCorrect": false }
          ]
        },
        {
          "topic": "ELB + ASG + EBS",
          "question": "Your instance in us-east-1a just got terminated, and the attached EBS volume is now available. Your colleague tells you he can't seem to attach it to your instance in us-east-1b.",
          "options": [
            { "text": "EBS volumes are AZ locked", "isCorrect": true },
            { "text": "EBS volumes are region locked", "isCorrect": false },
            { "text": "He's missing IAM permissions", "isCorrect": false }
          ]
        },
        {
          "topic": "ELB + ASG + EBS",
          "question": "Your company wants the most secure setup for your EBS volumes with minimal effort. You tell them",
          "options": [
            { "text": "EBS volumes support in flight SSL encryption and do support encryption at rest using KMS", "isCorrect": true },
            { "text": "EBS volumes aren't secure", "isCorrect": false },
            { "text": "EBS volumes support in flight SSL encryption but no encryption at rest", "isCorrect": false },
            { "text": "EBS volumes do not support in flight SSL encryption but do support encryption at rest using KMS", "isCorrect": false }
          ]
        },
        {
          "topic": "ELB + ASG + EBS",
          "question": "Select the correct EBS Volume Types from highest performance to lowest performance",
          "options": [
            { "text": "IOI(SSD), GP2(SSD), STI(HDD), SCI(HDD)", "isCorrect": true },
            { "text": "GP2(SSD), IOI(SSD), STI(HDD), SCI(HDD)", "isCorrect": false },
            { "text": "GP2(SSD), IOI(SSD), SCI(HDD), STI(HDD)", "isCorrect": false },
            { "text": "GP2(SSD), SCI(HDD), STI(HDD), IOI(SSD)", "isCorrect": false }
          ]
        },
        {
          "topic": "ELB + ASG + EBS",
          "question": "If you snapshot a 100GB drive that only has 5GB of Data, how many GBs your snapshot is?",
          "options": [
            { "text": "5GB", "isCorrect": true },
            { "text": "100GB", "isCorrect": false }
          ]
        },
        {
          "topic": "Route 53 + RDS + ElastiCache + VPC",
          "question": "Route53 is a...",
          "options": [
            { "text": "Global Service", "isCorrect": true },
            { "text": "Regional Service", "isCorrect": false }
          ]
        },
        {
          "topic": "Route 53 + RDS + ElastiCache + VPC",
          "question": "I have an ALB and I'd like to give it my own URL. I should choose a(n)...",
          "options": [
            { "text": "Alias record", "isCorrect": true },
            { "text": "A record", "isCorrect": false },
            { "text": "CNAME record", "isCorrect": false },
            { "text": "AAAA record", "isCorrect": false }
          ]
        },
        {
          "topic": "Route 53 + RDS + ElastiCache + VPC",
          "question": "My company would like to have a MySQL database internally that is going to be available even in case of a disaster in the AWS Cloud. I should setup",
          "options": [
            { "text": "Multi AZ", "isCorrect": true },
            { "text": "Read Replicas", "isCorrect": false },
            { "text": "Encryption", "isCorrect": false }
          ]
        },
        {
          "topic": "Route 53 + RDS + ElastiCache + VPC",
          "question": "Our RDS database struggles to keep up with the demand of the users from our website. Our million users mostly read news, and we don't post news very often. Which solution will NOT help fix this problem?",
          "options": [
            { "text": "RDS Multi AZ", "isCorrect": true },
            { "text": "RDS Read Replicas", "isCorrect": false },
            { "text": "An ElastiCache cluster", "isCorrect": false }
          ]
        },
        {
          "topic": "Route 53 + RDS + ElastiCache + VPC",
          "question": "We have setup read replicas on our RDS database, but our users are complaining that upon updating their social media posts, they do not see the update right away",
          "options": [
            { "text": "Read Replicas have asynchronous replication and therefore it's likely our users will only observe eventual consistency", "isCorrect": true },
            { "text": "There must be a bug in our application", "isCorrect": false },
            { "text": "We should have setup multi-az instead", "isCorrect": false }
          ]
        },
        {
          "topic": "Route 53 + RDS + ElastiCache + VPC",
          "question": "Which RDS feature does not require us to change our SQL connection string?",
          "options": [
            { "text": "Multi AZ", "isCorrect": true },
            { "text": "Read Replicas", "isCorrect": false }
          ]
        },
        {
          "topic": "Route 53 + RDS + ElastiCache + VPC",
          "question": "Your organisation wants to enforce SSL connections on your MySQL database",
          "options": [
            { "text": "Apply a 'REQUIRE SSL' statement to all your users in your SQL database", "isCorrect": true },
            { "text": "Change your security group rules to only allow SSL traffic", "isCorrect": false },
            { "text": "Download certificates and change your application to connect using SSL", "isCorrect": false },
            { "text": "Enable RDS encryption", "isCorrect": false }
          ]
        },
        {
          "topic": "Route 53 + RDS + ElastiCache + VPC",
          "question": "You want to ensure your Redis cluster will always be available",
          "options": [
            { "text": "Enable Multi AZ", "isCorrect": true },
            { "text": "Enable Read Replicas", "isCorrect": false }
          ]
        },
        {
          "topic": "Route 53 + RDS + ElastiCache + VPC",
          "question": "Your application functions on an ASG behind an ALB. Users have to constantly log back in and you'd rather not enable stickiness on your ALB as you fear it will overload some servers. What should you do?",
          "options": [
            { "text": "Store session data in ElastiCache", "isCorrect": true },
            { "text": "Store session data in RDS ", "isCorrect": false },
            { "text": "Create your own Load Balancer and deploy that on EC2 instances", "isCorrect": false },
            { "text": "Store session data in a shared EBS volume", "isCorrect": false }
          ]
        },
        {
          "topic": "Route 53 + RDS + ElastiCache + VPC",
          "question": "You are implementing a caching strategy with ElastiCache and would like to ensure that only the data that is often requested will be loaded in ElastiCache, as your cache size is small. Which caching strategy should you implement?",
          "options": [
            { "text": "Lazy Loading", "isCorrect": true },
            { "text": "Write Through", "isCorrect": false },
            { "text": "TTL", "isCorrect": false }
          ]
        },
        {
          "topic": "S3",
          "question": "You're trying to upload a 25 GB file on S3 and it's not working",
          "options": [
            { "text": "You should use Multi Part upload when your file is bigger than 5GB", "isCorrect": true },
            { "text": "The S3 service must be down", "isCorrect": false },
            { "text": "The limit of file size on S3 is 5GB", "isCorrect": false }
          ]
        },
        {
          "topic": "S3",
          "question": "I tried creating an S3 bucket named 'dev' but it didn't work. This is a new AWS Account and I have no buckets at all. What is the cause?",
          "options": [
            { "text": "Bucket names must be globally unique and 'dev' is already taken", "isCorrect": true },
            { "text": "I'm missing IAM permissions to create a bucket", "isCorrect": false }
          ]
        },
        {
          "topic": "S3",
          "question": "(exam style) We are reading and writing to S3 at a rate of 1000 files per seconds. To optimise the performance of S3, we should adopt the following format:",
          "options": [
            { "text": "xxxx_my_folder/my_file.extension where xxxx is random characters and numbers", "isCorrect": true },
            { "text": "YYYY_MM_DD_my_folder/my_file.extension where YYYY_MM_DD is the file date", "isCorrect": false },
            { "text": "YYYY_DD_MM_my_folder/my_file.extension where YYYY_DD_MM is the file date", "isCorrect": false },
            { "text": "we should open a support ticket to have AWS increase the performance of S3 for our account", "isCorrect": false }
          ]
        },
        {
          "topic": "S3",
          "question": "You've added files in your bucket and then enabled versioning. The files you've already added will have which version?",
          "options": [
            { "text": "null", "isCorrect": true },
            { "text": "1", "isCorrect": false },
            { "text": "0", "isCorrect": false },
            { "text": "-1", "isCorrect": false }
          ]
        },
        {
          "topic": "S3",
          "question": "Your client wants to make sure the encryption is happening in S3, but wants to fully manage the encryption keys and never store them in AWS. You recommend",
          "options": [
            { "text": "SSE-C", "isCorrect": true },
            { "text": "SSE-S3", "isCorrect": false },
            { "text": "SSE-KMS", "isCorrect": false },
            { "text": "Client Side Encryption", "isCorrect": false }
          ]
        },
        {
          "topic": "S3",
          "question": "Your company wants data to be encrypted in S3, and maintain control of the rotation policy for the encryption keys. You recommend",
          "options": [
            { "text": "SSE-KMS", "isCorrect": true },
            { "text": "SSE-C", "isCorrect": false },
            { "text": "SSE-S3", "isCorrect": false },
            { "text": "Client Side Encryption", "isCorrect": false }
          ]
        },
        {
          "topic": "S3",
          "question": "Your company does not trust S3 for encryption and wants it to happen on the application. You recommend",
          "options": [
            { "text": "Client Side Encryption", "isCorrect": true },
            { "text": "SSE-KMS", "isCorrect": false },
            { "text": "SSE-C", "isCorrect": false },
            { "text": "SSE-S3", "isCorrect": false }
          ]
        },
        {
          "topic": "S3",
          "question": "Which encryption method requires HTTPS?",
          "options": [
            { "text": "SSE-C", "isCorrect": true },
            { "text": "SSE-S3", "isCorrect": false },
            { "text": "SSE-KMS", "isCorrect": false },
            { "text": "Client Side Encryption", "isCorrect": false }
          ]
        },
        {
          "topic": "S3",
          "question": "You have a website that loads files from another S3 bucket. When you try the URL of the files directly in your Chrome browser it works, but when the website you're visiting tries to load these files it doesn't. What's the problem?",
          "options": [
            { "text": "CORS is wrong", "isCorrect": true },
            { "text": "The Bucket policy is wrong", "isCorrect": false },
            { "text": "The IAM policy is wrong", "isCorrect": false },
            { "text": "Encryption is wrong", "isCorrect": false }
          ]
        },
        {
          "topic": "S3",
          "question": "When uploading a file that is 1 GB to S3, which type of upload will give you the best throughput performance and resilience?",
          "options": [
            { "text": "Do a multi-part upload", "isCorrect": true },
            { "text": "Use SSE-S3", "isCorrect": false },
            { "text": "Upload as one part", "isCorrect": false }
          ],
          "infoIfCorrect": "When a file is over 100 MB, Multi Part upload is recommended as it will upload many parts in parallel, maximizing the throughput of your bandwidth and also allowing for a smaller part to retry in case that part fails."
        },
        {
          "topic": "S3",
          "question": "You would like to retrieve a subset of your dataset stored in S3 with the CSV format. You would like to retrieve a month of data and only 3 columns out of the 10. You need to minimize compute and network costs for this, what should you use?",
          "options": [
            { "text": "S3 Select", "isCorrect": true },
            { "text": "S3 Inventory", "isCorrect": false },
            { "text": "S3 Analytics", "isCorrect": false },
            { "text": "S3 Access Logs", "isCorrect": false }
          ]
        },
        {
          "topic": "CLI & SDK",
          "question": "My EC2 Instance does not have the permissions to perform an API call PutObject on S3. What should I do?",
          "options": [
            { "text": "I should ask an administrator to attach a Policy to the IAM Role on my EC2 Instance that authorises it to do the API call", "isCorrect": true },
            { "text": "I should run `aws configure` and insert my personal credentials, because I have access to PutObject on S3", "isCorrect": false },
            { "text": "I should export the environment variables with my credentials on the EC2 Instance", "isCorrect": false },
            { "text": "I should use the EC2 Metadata API call ", "isCorrect": false }
          ]
        },
        {
          "topic": "CLI & SDK",
          "question": "The AWS CLI depends on which language?",
          "options": [
            { "text": "Python", "isCorrect": true },
            { "text": "Java", "isCorrect": false },
            { "text": "Golang", "isCorrect": false },
            { "text": "C#", "isCorrect": false }
          ]
        },
        {
          "topic": "CLI & SDK",
          "question": "I have an on-premise personal server that I'd like to use to perform AWS API calls",
          "options": [
            { "text": "I should run `aws configure` and put my credentials there. Invalidate them when I'm done", "isCorrect": true },
            { "text": "I should attach an EC2 IAM Role to my personal server", "isCorrect": false }
          ]
        },
        {
          "topic": "CLI & SDK",
          "question": "I'd like to deploy an application to an on-premise server. The server needs to perform API calls to Amazon S3. Amongst the following options, the best security I can achieve is...",
          "options": [
            { "text": "create an IAM user for the application and put the credentials into environment variables. Here, it's about creating a dedicated user for that application, as using your own personal credentials would blur the lines between actual users and applications.", "isCorrect": true },
            { "text": "attach an IAM Role to my on-premise server", "isCorrect": false },
            { "text": "run `aws configure` and insert my personal credentials", "isCorrect": false },
            { "text": "create an IAM user for the application and insert the credentials in the application's code", "isCorrect": false }
          ]
        },
        {
          "topic": "CLI & SDK",
          "question": "I need my colleagues help to debug my code. When he runs the application on his machine, it's working fine, whereas I get API authorisation exceptions. What should I do?",
          "options": [
            { "text": "Compare his IAM policy and my IAM policy in the policy simulator to understand the differences", "isCorrect": true },
            { "text": "Send him my AWS access key and secret key so he can replicate the issue on his machine", "isCorrect": false },
            { "text": "Ask him to send me his credentials so I can start working", "isCorrect": false },
            { "text": "Ask him to create an EC2 server and puts his credentials there so I can run the application from the EC2 Instance", "isCorrect": false }
          ]
        },
        {
          "topic": "CLI & SDK",
          "question": "When I run the CLI on my EC2 Instances, the CLI uses the ______ service to get _____ credentials thanks to the IAM Role that's attached.",
          "options": [
            { "text": "metadata | temporary", "isCorrect": true },
            { "text": "user data | temporary", "isCorrect": false },
            { "text": "user data | permanent", "isCorrect": false },
            { "text": "metadata | permanent", "isCorrect": false }
          ]
        }
      ]
    },
    {
      "id": 2,
      "title": "Australian Citizenship Test - Practice",
      "questions": [
        {
          "topic": null,
          "question": "The national language of Australia is:",
          "type": "single_answer",
          "options": [
            { "text": "English", "isCorrect": true },
            { "text": "French", "isCorrect": false },
            { "text": "Ther is no national Language", "isCorrect": false },
            { "text": "Aborigine", "isCorrect": false },
            { "text": "Australian", "isCorrect": false }
          ]
        },
        {
          "topic": null,
          "question": "Which of the following demonstrates equality in Australia",
          "options": [
            { "text": "Men and women have the same rights", "isCorrect": true },
            { "text": "Adults and children have the same rights", "isCorrect": false },
            { "text": "Everyone speaks the same language", "isCorrect": false },
            { "text": "Everyone follows the same religion", "isCorrect": false }
          ]
        },
        {
          "topic": null,
          "question": "Which of the following is a responsability for Australians 18 years old or over",
          "options": [
            { "text": "to serve on a jury if called to do so", "isCorrect": true },
            { "text": "to attend university", "isCorrect": false },
            { "text": "to volunteer on his or her community", "isCorrect": false },
            { "text": "None of the above", "isCorrect": false }
          ]
        },
        {
          "topic": null,
          "question": "Which of the following is correct about Defence Force in Australia",
          "options": [
            { "text": "Service in the Australian Defence Force is voluntary", "isCorrect": true },
            { "text": "Service in the Australian Defence Force is compulsory if you want to apply for a passport", "isCorrect": false },
            { "text": "Service in the Australian Defence Force is compulsory if you are not in school at the age of 18-21", "isCorrect": false },
            { "text": "Service in the Australian Defence Force is voluntary for women", "isCorrect": false }
          ]
        },
        {
          "topic": null,
          "question": "Which of the following has the power to interpret and apply laws?",
          "options": [
            { "text": "Judicial", "isCorrect": true },
            { "text": "All of the avobe", "isCorrect": false, "position": 4 },
            { "text": "Legislative", "isCorrect": false },
            { "text": "Executive", "isCorrect": false }
          ]
        },
        {
          "topic": null,
          "question": "Which of the following is correct about the Queen's role?",
          "options": [
            { "text": "She does not play a day-to-day role in Australia's government", "isCorrect": true },
            { "text": "She appoints the Prime-Minister", "isCorrect": false },
            { "text": "She signs of Bills", "isCorrect": false },
            { "text": "She pays for all government expense", "isCorrect": false }
          ]
        },
        {
          "topic": null,
          "question": "Which of the following statements is true",
          "options": [
            { "text": "Australians believe change should occur through the democratic process", "isCorrect": true },
            { "text": "All Australians are Christian", "isCorrect": false },
            { "text": "Australians do not believe in change", "isCorrect": false },
            { "text": "Australians believe change should occur by violent means", "isCorrect": false }
          ]
        },
        {
          "topic": null,
          "question": "The capital city of Victoria is:",
          "options": [
            { "text": "Melbourne", "isCorrect": true },
            { "text": "Perth", "isCorrect": false },
            { "text": "Sydney", "isCorrect": false },
            { "text": "Melton", "isCorrect": false }
          ]
        },
        {
          "topic": null,
          "question": "The main town near the centre of Australia is:",
          "options": [
            { "text": "Alice Springs", "isCorrect": true },
            { "text": "Sydney", "isCorrect": false },
            { "text": "Perth", "isCorrect": false },
            { "text": "Darwing", "isCorrect": false }
          ]
        },
        {
          "topic": null,
          "question": "The Prime-Minister announces ____ on the eve of Australia Day",
          "options": [
            { "text": "The Australian of the Year Award", "isCorrect": true },
            { "text": "The next Prime-Minister", "isCorrect": false },
            { "text": "The Best Politician Awards", "isCorrect": false },
            { "text": "The Best Police Awards", "isCorrect": false }
          ]
        },
        {
          "topic": null,
          "question": "It is illegal to:",
          "options": [
            { "text": "Talk on hand-held mobile phone while driving", "isCorrect": true },
            { "text": "Talk to the Prime-Minister", "isCorrect": false },
            { "text": "Express negative comments about the government", "isCorrect": false },
            { "text": "A and C", "isCorrect": false, "position": 4 }
          ]
        },
        {
          "topic": null,
          "question": "The power of government is cotrolled by:",
          "options": [
            { "text": "Dividing power among the three arms of government", "isCorrect": true },
            { "text": "The Queen", "isCorrect": false },
            { "text": "Dividing power among the Prime-Minister and Governor-General", "isCorrect": false },
            { "text": "Dividing power among the government and the the citizens", "isCorrect": false }
          ]
        },
        {
          "topic": null,
          "question": "The indigenous people of Australia share",
          "options": [
            { "text": "A and B", "isCorrect": true },
            { "text": "Common beliefs", "isCorrect": false, "position": 1 },
            { "text": "Common traditions", "isCorrect": false, "position": 2 },
            { "text": "The same language", "isCorrect": false }
          ]
        },
        {
          "topic": null,
          "question": "What colours are on the Torress Strait Islander Flag",
          "options": [
            { "text": "Black, white, blue, and green", "isCorrect": true },
            { "text": "Red, black, and yellow", "isCorrect": false },
            { "text": "Blue, green, yellow, and black", "isCorrect": false },
            { "text": "Black, red, blue, and lime", "isCorrect": false }
          ]
        },
        {
          "topic": null,
          "question": "If you break the traffic laws, you could be:",
          "options": [
            { "text": "Fined and sent to prison", "isCorrect": true },
            { "text": "Flogged", "isCorrect": false },
            { "text": "Expelled from Australia", "isCorrect": false },
            { "text": "All of the above", "isCorrect": false, "position": 4 }
          ]
        },
        {
          "topic": null,
          "question": "New laws or amendments to the laws are proposed by:",
          "options": [
            { "text": "The elected members of the Australian Parliament", "isCorrect": true },
            { "text": "The Queen", "isCorrect": false },
            { "text": "The citizens", "isCorrect": false },
            { "text": "All of the above", "isCorrect": false, "position": 4 }
          ]
        },
        {
          "topic": null,
          "question": "Each state has:",
          "options": [
            { "text": "B and C", "isCorrect": true },
            { "text": "Its own floral emblems", "isCorrect": false, "position": 2 },
            { "text": "Its own local council", "isCorrect": false, "position": 3 },
            { "text": "Its own anthem", "isCorrect": false }
          ]
        },
        {
          "topic": null,
          "question": "During a trial in Australia, whose responsibility is it to explain the law to the jury?",
          "options": [
            { "text": "The trial judge", "isCorrect": true },
            { "text": "The Prime-Minister", "isCorrect": false },
            { "text": "The Governor-General", "isCorrect": false },
            { "text": "The lawyer of the defendant", "isCorrect": false }
          ]
        },
        {
          "topic": null,
          "question": "Which of the following is Australia's largest state?",
          "options": [
            { "text": "Western Australia", "isCorrect": true },
            { "text": "Victoria", "isCorrect": false },
            { "text": "Tasmania", "isCorrect": false },
            { "text": "Queensland", "isCorrect": false }
          ]
        },
        {
          "topic": null,
          "question": "Who has the right to be represented by a lawyer in court?",
          "options": [
            { "text": "Everyone", "isCorrect": true },
            { "text": "Only the wealthy people", "isCorrect": false },
            { "text": "Only male", "isCorrect": false },
            { "text": "Only politicians", "isCorrect": false }
          ]
        }
      ]
    }
  ]
}