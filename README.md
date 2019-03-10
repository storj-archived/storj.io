# Storj Hugo

## Table Of Contents
---
- Improvements
- How to for Marketing
- How to for Engineering

## Improvements
---

### Modular codebase

Pages are broken down into infinitely re-usable sections called "partials".

This helps prevent wasting time skimming 1000+ lines of html for a closing div tag and has substiantally reduced
the number of lines of code.
![modular code](static/img/modularCode.png)


### CMS for Marketing Team
The Website now has a CMS where the marketing team can update the verbage and images on the website.
![CMS](static/img/CMS.png)
The website should accurately reflect our current stage of production. Twice as many updates can be completed in half the time now that the marketing team can make them directly.
![CMS2](static/img/CMS2.png)


### Faster Web Development
In the screenshot below on the left hand side you can see the footer partial which has some hugo logic in it that allows you to propogate new elements based on certain data. On the right hand side you see two pages both using that footer partial. Now any updates made to the footer automatically update across all pages using that partial. This saves a lot of time from having to make the update on each page manually.
![partials](static/img/partials.png)

## How to for Marketing
---

If you've been whitlisted, you should be able to access the CMS by appending "/admin" to the site's url the same way you do for the blog.

![cms3](static/img/admin.png)

Once in, you'll see the collections on your left. These represent either a whole page, or a certain part/section of a page. When you click on a collection you'll see the elements that make it up in the form of editable markdown files in the middle of the screen.

![cms3](static/img/CMS3.png)

You can create a new article by clicking on "new press articles" in the screenshot above.
Adding new media articles to our press page can be done now in the same time it takes to .........Ohhh, idk, put it in a google sheet?

![cms3](static/img/input.png)

Publish your changes using the "publish" button in the upper right hand corner. This pushes the update to the website live in realtime.

NOTE: The preview section is not meant to show you a preview of what the page would look like with adjustments. It is just rendering your input as a markdown file allowing you to format your input and check selected images are working.


## How to for Engineering
---

### When creating a new page 
---

- Create a folder in the content dir
with the name of the page

- Create a folder in the layouts dir
with the exact same name

- Create a file named single.html inside 
layouts/dirYouCreatedInLastStep/

- Add permalink for the page inside the config.toml file

- You can now add a markdown file to content/dirYouCreatedInStep1/

- In the front matter you can set key value pairs that can later be used as variables inside your single.html

### Fixing broken links and creating redirects using aliases 
---

Our old website had several pages where url's had a .html extension. We have dropped the .html extension on all urls(which can be found in the config.toml file). With that said, there are still existing resources out there that use some of those old urls. The easiet way to set up an instant redirect to fix 404's is through Hugo aliasing. It's fast and easy.

1.  

    cd /content/dirOfPageInQuestion

2.   
    
    touch alias.md

3.  

    echo -e "---\naliases :\n\t- /pathOfOldDirToRedirectFrom.html\n---" \
    >> alias.md 

result:

![aliasing](static/img/aliasing.png)


4.

    touch ../layouts/dirOfPageInQuestion/alias.html

### Now just leave alias.html blank and you're ready to test the redirect.







### Adjusting the CMS
---

CMS config file path is 

    /static/admin/config.yml

![config](static/img/compare.png)

The above screenshot helps you understand how the config file fields work. If we look at the press-articles collection's fields you can see the 

- name takes a front matter key.
- label is what you would like the value
to be called in the cms
- widget represents the data type for the user input
- hidden and default can also be used for setting default front matter key/value pairs and hiding them from being altered by user input.

