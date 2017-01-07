// tag 排序 加载时候的默认值...



$(function tagDeafultFilter(){
	var tagDeafult = $("#ymlTagSortDefault").text();
    //alert( tagDeafult );

    if      ( tagDeafult == "abc" )  { tagAbcfilter();  }
    else if ( tagDeafult == "num" )  { tagNumfilter();  }
    else                            { tagTimefilter(); }

});








	<script>

	  var posts = [
		{% for post in site.posts %}
		  {
			"title": "{{ post.title }}",
			"categories": "{{ post.categories }}",
			"url": "{{ post.url }}"
		  }
		  {% unless forloop.last %},{% endunless %}
		{% endfor %}
	  ]; 

	console.log( posts );
	</script>
