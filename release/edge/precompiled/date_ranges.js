function ub(a,b){this.start=qa(a)?a.clone():new s;this.end=qa(b)?b.clone():new s}
ub.prototype={toString:function(){return this.isValid()?this.start.wa()+".."+this.end.wa():"Invalid DateRange"},isValid:function(){return this.start<this.end},duration:function(){return this.isValid()?this.end.getTime()-this.start.getTime():NaN},every:function(a,b){var c=this.start.clone(),d=[],e,g=0;if(C(a)){e=a.match(/^(\d+)?\s?(\w+?)s?$/i);a=parseInt(e[1]||1);e="add"+F(e[2])+"s";c[e](0,j)}else e="addMilliseconds";for(;c<=this.end;){d.push(c);b&&b(c,g);c=c.clone()[e](a);g++}return d}};
["Millisecond","Second","Minute","Hour","Day","Week","Month","Year"].each(function(a){ub.prototype["each"+a]=function(b){return this.every(a,b)}});y(s,m,m,{range:function(a,b){return new ub(a,b)}});