YourMum
=======

Something I wrote years ago ... a JavaScript applet for
generating mothers' maiden names for the privacy-aware.

How to use
----------

The file alone does nothing, you need to use it in something
else. It takes two arguments, a first name and a company name.
It then generates an MD5 hash of these two names, takes the
first byte of the hash and returns a surname from a static
array.

Why?
----

Your mother's maiden name isn't a secure way of identifying you.
All companies that ask for your mother's maiden name as a form
of identification have the information required to impersonate
you, and let's face it, many people's mothers' maiden names are
easy to determine these days thanks to things like Facebook. So
the idea is to have a different mother's maiden name for each
organisation you deal with, and this script allows that to happen.

Basically, entering a constant first name and company name
will always return the same surname. Because of the nature
of hashing, changing just one character in either of the inputs
will cause the output to change, but it will always return the
same thing for a particular input. So, if your name was Fred
and you were dealing with Barclays, you'd call the function
with GenerateSurname('fred', 'barclays') and get the result
'JARVIS'. So you can happily tell Barclays your mother's maiden
name is Jarvis and not worry about the fact that it's the same
security information that you use to identify yourself to
NPower. And as calling the function with the values 'fred'
and 'barclays' will *always* return Jarvis, you don't need to
keep a note anywhere, provided you always have this script
to hand.
