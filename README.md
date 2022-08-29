National Union of the Homeless
==============================

![travis-ci badge](https://travis-ci.com/eschulte/nuh.svg?branch=main)

https://eschulte.github.io/nuh/

## Add a blog entry

To add a new blog entry, you'll need to [create a GitHub account][],
then get write access to this repository.  (Contact one of the owners
of this repository to get access for a new account.)  Then create a
new blog by following these steps:

[create a GitHub account]: https://github.com/signup

1. In [posts/][] click on the `Add file` button in the top right.
   Then select `Create new file` from the drop-down menu.

2. Give your file a name.  This should have no spaces or special
   characters and should end with `.md`.  So for example if your blog
   title is "`Latest from the trenches!`" you might name the file
   `latest-from-the-trenches.md`.

3. Paste the following text into the resulting empty text field.

    ```
    ---
    title: Your Title
    date: Your Date
    layout: post
    tags: posts
    ---

    Your Content
    ```

4. Replace `Your Title` with the title of your blog post.  Replace
   `Your Date` with the date of your blog post in `YYYY-MM-DD` format.
   Replace `Your Content` with the text of your blog post.  This text
   can be formatted with [markdown][] to add *italics*, **bold**,
   bullet lists, etc...

5. If you want to add a picture to your blog entry, first go to the
   [img/][] directory and upload the picture (see the docs for [Adding
   a File to a Repository on GitHub][]).  Once the file is uploaded,
   you can link to it from your blog post by adding a line like the
   following on a line by itself anywhere in the text of your article
   where you want the picture to appear.
   
   ```
   ![Your Description]({{ /img/Your Filename |url }})
   ```

    Replace `Your Description` with a short blurb that will appear
    when the picture can't be viewed.  Replace `Your Filename` with
    the name of the file uploaded into the [img/][] directory.

6. At the bottom of the page hit the `Commit new file` button to save
   your post.

7. After a couple of minutes the site should rebuild with your blog in
   place.  Browse to https://nationalunionofthehomeless.org to see.
   If you don't see your new post appear, contact one of the owners of
   the repository to see if they can help.

[posts/]: https://github.com/eschulte/nuh-preview/tree/main/posts
[markdown]: https://www.markdownguide.org/basic-syntax/
[img/]: https://github.com/eschulte/nuh-preview/tree/main/img
[Adding a File to a Repository on GitHub]: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-on-github
