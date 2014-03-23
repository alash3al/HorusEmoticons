What is it ?
==============

Horus Emoticons is a javascript class to replace emoticons with it's icons, also you can add your own .  
The Script is very easy to use, just include then start using it .  
**NOTE**: this version isn't based on jquery, so you can code without jquery. 

***


Usage
========

```
<!-- include those in your html page -->

<script src="//code.jquery.com/jquery-latest.js" type="text/javascript"></script>
<script src="//raw.githubusercontent.com/alash3al/HorusEmoticons/master/HorusEmoticons.js" type="text/javascript"></script>
<script type="text/javascript">
        $(document).ready(function(){
            
		// shortcut
		var he = HorusEmoticons;
		
		// set the global icons-size width & height
		he.size = 22;
		
		// add emoticon and it's icon-path
		// use {'emo':'link', ...}
		// he.add({':)':'path/to/smile.png', ':(':'path/to/sad.png'});
		
		// there are some basic emoticons by default
		he.basic();
		
		// i'm using jquery selector
		var new_html = he.parse( $('div').html() );
		$('div').html( new_html );
          
        });
</script>

<div>
	hi , :) 3aaaaaaaaw :D :) ♥ [[anger]] B|
</div>

```

***

About
=======

License MIT License  
Version 2.0  
Author: Mohammed Alashaal <fb.com/alash3al, m7medalash3al.tk>  
