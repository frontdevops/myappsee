function topLevelMenuAnchorClicked(n){animateMenu(n);$(n).siblings(".submenu").length==0&&(clearActiveSubmenuItems(),markTopLevelMenuAnchorSelected(n))}function submenuItemClicked(n){clearActiveSubmenuItems();$(n).parent().addClass("active");var t=$(n).parents(".menu-topLevelItem").children("a");markTopLevelMenuAnchorSelected(t)}function animateMenu(n){var i=$(n).siblings(".submenu"),u=i.length>0,t=$(n).parent(),r;t.hasClass("open")?(i.slideUp(),t.removeClass("open"),t.find("a > .hasArrow").removeClass("open")):($(".submenu").slideUp(),r=$(".submenu").parent(),r.removeClass("open"),r.find("a > .hasArrow.open").removeClass("open"),u&&(i.slideDown(),t.addClass("open"),t.find("a > .hasArrow").addClass("open")))}function clearActiveSubmenuItems(){$(".submenu li").removeClass("active")}function markTopLevelMenuAnchorSelected(n){var t=$(n).children("span:last-child");t.length!=0&&($(t).hasClass("selected")||($(".menu-topLevelItem > a > span.selected").removeClass("selected"),$(".menu-topLevelItem > a > span.hasArrow").addClass("arrow"),$(t).removeClass("arrow").addClass("selected"),$(n).parent().addClass("active").siblings().removeClass("active")))}function correlateMenuItemToContext(){var n=$('.context-action[context ^="'+appsee.context.action+'"]'),t,i,r,u;n.length>1&&(t=$(n).filter(function(){var n=appseeUtils.parseUrlQueryString($(this).attr("actionParams")),i=appsee.parseActionParameters();for(var t in n)if(n[t]!=i[t])return!1;return!0}),n=t.length==1?t:n[0]);i=$(n).parents("ul");i.length==2?(r=$(i[0]).prev("a"),u=$(r).parent("li").hasClass("open"),u||animateMenu(r),submenuItemClicked(n)):(animateMenu(n),markTopLevelMenuAnchorSelected(n))}