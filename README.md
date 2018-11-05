Given a `jobTitle_list.txt`, which contains 1072 job title. The project is trying to scrapping the images from Bing and make profile photo for the different job title.


The process we are trying to mimic is:

+ Take teacher as example [input "teacher" as searching item](https://www.bing.com/images/search?q=teacher&qs=HS&form=QBILPG&sp=3&sk=HS2&sc=3-0&cvid=27075650CF82418192203918B4363B82)
+ Set the `License` to `Free to share and use commercially`, set the `type` to `Photograph`.
+ Choose the first image as the “profile photo" for teacher
+ Output `log_imageURL` contains job_id, job_title and imageURL we parsed from Bing.
