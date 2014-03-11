About
==============

Horus Emoticons is a JQuery based class to replace emoticons with it's icons, also you can add your own .
The Script is very easy to use, just include JQuery & it then start using it .


***


Usage
========

```
<!-- include those in your html page -->

<script src="//code.jquery.com/jquery-latest.js" type="text/javascript"></script>
<script src="//github.com/alash3al/HorusEmoticons/raw/master/horus-emoticons.js" type="text/javascript"></script>
<script type="text/javascript">
        $(document).ready(function(){
            
            // set the global icons-size
            HorusEmoticons.size = 20;
        
            // add emoticon and it's icon-path
            // use {'':'', '':'', ...} add unlimited emoticons
            HorusEmoticons.add({':)':'path/to/smile.png', ':(':'path/to/sad.png'});
          
            // start parsing
            // using the basic jquery selector
            // here i'll tell it to parse the tag with class '.emoticons'
            HorusEmoticons.parse('.emoticons');
          
        });
</script>

```

***

Basic Emoticons
================

I've collected some icons and used them , the are:


```
<!-- include those in your html page -->

<script src="//code.jquery.com/jquery-latest.js" type="text/javascript"></script>
<script src="//github.com/alash3al/HorusEmoticons/raw/master/horus-emoticons.js" type="text/javascript"></script>
<script type="text/javascript">
        $(document).ready(function(){
            
            // set the global icons-size
            HorusEmoticons.size = 20;
        
            // add emoticon and it's icon-path
            // use {'':'', '':'', ...} add unlimited emoticons
            HorusEmoticons.add({
    ' :) ':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Smile_2_12.png',
    ' :D ':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Grin_2_13.png',
    ' ;) ':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Wink_2_14.png',
    ' ^_^ ':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Happy_Eyes_2_15.png',
    ' 3: ':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Cat_Smile_2_17.png',
    ' :( ':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Sad_2_19.png',
    " :'( ":'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Cry_2_20.png',
    ' :o ':"http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Shock_2_21.png",
    ' 8) ':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Glasses_2_22.png',
    ' B| ':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Cool_Glasses_2_23.png',
    ' >_< ':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Laughing_Eyes_2_16.png',
    ' :P ':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Tongue_2_24.png',
    ' o.O ':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Woot_2_25.png',
    ' 3:) ':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_devil_2_28.png',
    ' O:) ':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Angel_2_29.png',
    ' :v ':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Pac_Man_2_32.png',
    ' 3) ':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Heart_2_31.png',
    ' :* ':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Kiss_2_30.png',
    ' [[troll_1]] ': 'http://www.myemoticons.com/images/meme-faces/derpina.jpg',
    ' [[troll_2]] ':'http://www.sherv.net/cm/emoticons/rage/jackie-chan-troll-smiley-emoticon.png',
    ' [[troll_3]] ':'http://www.sherv.net/cm/emoticons/rage/yao-ming-forever-alone-smiley-emoticon.png'
                });
          
            // start parsing
            // using the basic jquery selector
            // here i'll tell it to parse the tag with class '.emoticons'
            HorusEmoticons.parse('.emoticons');
          
        });
</script>

```
