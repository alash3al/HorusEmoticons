// HorusEmoticons Javascript Script
// Version 2.0
// Author: Mohammed Alashaal <fb.com/alash3al, m7medalash3al.tk>
// An emoticons javascript class
var HorusEmoticons = 
{
    // empticons will registered here
    emoticons : {}
    // global size for emoticons width & height
    ,size: 22
    
    // Add multiple emoticons
    // Must be an object {key:value, key:value}
    ,add : function(emoticons)
    {
        for(var k in emoticons) {
            this.emoticons[k] = emoticons[k];
        }
    }
    
    // Parse subject for emoticons
    // Parse, Replace registered emoticons with it's images
    ,parse: function(subject)
    {
        for(var k in this.emoticons) {
            var rexgp = new RegExp(this.preg_quote(k), 'ig');
            subject = subject.replace(rexgp, this.img(k, this.emoticons[k]));
        }

        return subject;
    }
    
    // Create <img /> tag
    // It uses the size as width & height
    ,img: function(title, src)
    {
        return '<img style="vertical-align: middle" src="'+src+'" title="'+title+'" alt="'+title+'"  width="'+this.size+'" height="'+this.size+'"/>';
    }

    // PHP Like preg_quote()
    // Escape REGEXP chars
    ,preg_quote: function(str)
    {
    	return str.replace(/[[\]{}()*+?.\\|^$\-,&#\s]/g, "\\$&");
    }

    // Default Emoticons
    // If you want basic facebook-like emoticons,
    // just call this method
    ,basic : function() {
    	this.add
    	({
		    '3:)':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_devil_2_28.png',
		    ':)':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Smile_2_12.png',
		    ':D':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Grin_2_13.png',
		    ';)':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Wink_2_14.png',
		    '^_^':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Happy_Eyes_2_15.png',
		    '3:':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Cat_Smile_2_17.png',
		    ':(':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Sad_2_19.png',
		    ":'(":'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Cry_2_20.png',
		    ':o':"http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Shock_2_21.png",
		    'B|':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Cool_Glasses_2_23.png',
		    '[[anger]]':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Laughing_Eyes_2_16.png',
		    ':P':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Tongue_2_24.png',
		    'o.O':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Woot_2_25.png',
		    'O:)':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Angel_2_29.png',
		    ':v':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Pac_Man_2_32.png',
		    '♥':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Heart_2_31.png',
		    ':*':'http://www.4redpixels.com/uploads/page_pics/blog_entries/facebook_smileys/Facebook_Smiley_-_Kiss_2_30.png'
    	});
    }
};
