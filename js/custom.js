/* using an import links id (i.e. "#subpage_name") the (autogenerated from .md files) subpages contents are put into this document*/
	function includeMdContent(qs_site_id)
		{			
			/* before adding any elements, the contents of the displaying div need to be removed*/
			var elem = document.getElementById("entry_container");
			while(elem.hasChildNodes())
			{
				elem.removeChild(elem.lastChild);
			}
			/*now the entry_container is empty and can be filled*/
			var link = document.querySelector(qs_site_id);
			var content = link.import.querySelectorAll('*');			
			$("#entry_container").hide();			
			document.getElementById("entry_container").appendChild(document.importNode(content[0],true));
			$("#entry_container").fadeIn(750);						
		}
	function markActive(elem)
		{
			/* first fetch all the entries from the side-nav */
			var entries = document.querySelectorAll("ul.side-nav > li > p");
			/* find the currently active element*/
			for (var i = 0; i < entries.length; i++) 
				{
					/* remove the active class from every <li> element*/
					if (entries[i].classList.contains("active")) 
						{					
							entries[i].classList.remove("active","white");
						}
				}
			/* now the clicked element is set to active */
			elem.classList.add("active","white");
		}
	function setTitle(title_str)
		{
			var str = document.getElementsByClassName("page-title");
			str[0].innerHTML = title_str;
		}