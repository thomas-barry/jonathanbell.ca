# jonathanbell.ca

[jonathanbell.ca](https://jonathanbell.ca) re-written in [Gatsby](https://www.gatsbyjs.org/).

I got bored one day and re-wrote my photography portfolio website (previously made with PHP) using Gatsby (a modern web framework).

You may clone/fork this project and use it for your own needs. However, please do not represent yourself as me and do not use my content on your website.

The site uses images hosted in an [Amazon S3](https://aws.amazon.com/s3) bucket for data. Each folder inside the bucket is treated as a different portfolio "section" when the site is built.

## Developer installation

1. Clone this repo
1. `cd jonathanbell.ca`
1. `npm install`
1. Setup an AWS S3 bucket with public access and folders named using the convention outlined below. Place your images for each portfolio section in each folder.
1. Configure your AWS secrets if you haven't already (you'll need them in order to access the contents of your bucket)

## Organizing images inside S3 bucket folders

Organize your folders in S3 by your desired _portfolio section_. For example, in order to have a "portraits" section on your site, create a folder called "Portraits" inside your S3 bucket. Important: **no spaces allowed!!** In order to have spaces display on the site front-end (inside the site navigation), replace the spaces with a hyphen ("`-`") when creating your S3 bucket folder names. For example, if your desired portfolio section name is "Selected Works 1", then create a folder called `Selected-Works-1` inside your AWS S3 bucket.

After you have uploaded your images to S3, run `AWS_BUCKET_NAME=your-bucket-name AWS_ACCESS_KEY_ID=your-access-key-ID AWS_ACCESS_KEY=your-access-key gatsby develop`. Your site is now viewable at `localhost:8000`.
