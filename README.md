National Union of the Homeless
==============================

![travis-ci badge](https://travis-ci.com/eschulte/nuh.svg?branch=main)

https://eschulte.github.io/nuh/

## Add a blog entry

To add a new blog entry, you'll need to be logged into GitHub with an
account that has write access to this repository.  Contact one of the
owners of the repository if that isn't already the case.  Then create
a new blog by following these steps:

1. In [posts/][] click on the `Add file` button in the top right.
   Then select `Create new file` from the drop-down menu.

2. Give your file a name.  This should have no spaces or special
   characters and should end with `.md`.  So for example if your blog
   title is "`Latest from the trenches!`" you might name the file
   `latest-from-the-trenches.md`.

3. Paste the following text into the resulting empty text field.

    ```
    ---
    title: [Your Title]
    date: [Your Date]
    layout: post
    tags: posts
    ---

    [Your Content]
    ```

4. Replace `[Your Title]` with the title of your blog post.  Replace
   `[Your Date]` with the date of your blog post in `YYYY-MM-DD`
   format.  Replace `[Your Content]` with the text of your blog post.
   This text can be formatted with [markdown][] to add *italics*,
   **bold**, bullet lists, etc...

5. At the bottom of the page hit the `Commit new file` button to save
   your post.

6. After a couple of minutes the site should rebuild with your blog in
   place.  Browse to https://nationalunionofthehomeless.org to see.
   If you don't see your new post appear, contact one of the owners of
   the repository to see if they can help.

[posts/]: https://github.com/eschulte/nuh-preview/tree/main/posts
[markdown]: https://www.markdownguide.org/basic-syntax/
