// After digitalOcean procedure(creating vps{virtual private server})
// download putty for hosting website and login with your ip address and password
// hosting using putty application
" pwd       "         // shows current working directory
" ls        "        // list of records (files & folders)
" cd /      "        //  home directory (this pc)
" cd /home  "        //  home directory present at this pc 
" cd home   "        // going to home directory (local disk home or folder )
" cd ../    "        // going back(outside the current folder) to folder

" cd c <double tab>"  // list the files and folders with name starting with 'c' 
" rm  <file_name> "    //  remove file
" vim <file_name>"
const { download } = require("express/lib/response")

      // creat file
// now it will ask to insert file content
press " i " key 
" right click" or " shift + insert"     // to paste in putty application

" wget <img link> "   // to file  link  eg. background image link from google
" mv <file_name> <directory>"     // move file 
" mv <file_name> <new_file_name>"     // rename file 




// hosting using powershell
" ssh root@<ip_address> "
" password "


// make your website secure
" ufw   "
" ufw status  ---> active "
" apt udate   "       //help instal packages



// LAMP (Linux, Apache, Mysql, Php)
// digital ocean lamp stack-----------------search to get procedure to install and use apache



// sudo --- > this user has all power of access 
" sudo apt intall apache2 "       // apache is web server ensure web serving is good
" y   "
" sudo ufw app list"
" sudo ufw app info 'Apache Full'   "     // status about apache server
" sudo ufw allow in 'Apache Full'   "     // allow access apache server




// ready!!!
// serving static files
" cd /var /www/ "
" cd html        "                      // all file in this folder get served on web
" ls   (eg. index.html)"
" vim index.html"
// goto Apache2 and modify  followiing keys
" i "  // to insert any text 
" backspace "  
" write something" (eg.  CodeWithKittu)
" Esc key "                              // exit form insert
" shift key + ; (i.e.  :wq)  "          // press ':' key, then write wq  (i.e.  :wq)
" enter "                               // it will save and get exit 



'download filezilla client software '        // it is  a file hossting software
// connect to your server..........
'<ip_adresss>  <root>  <Password> <port: 22>'
'</var/www.html>'  // put this address in 'remote site' to access server folder files
// now you can simply acces your server files folder copy etc as in file explorer
