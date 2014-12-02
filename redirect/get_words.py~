import re

def words(text): return re.findall('[a-z]+', text.lower()) 
WORDS = words(file('big.txt').read())
print len( WORDS ) 
FOUR_LETTER_WORDS = filter( lambda x: len(x)==4 , WORDS ) 
FIVE_LETTER_WORDS = filter( lambda x: len(x)==5 , WORDS )
print len( FOUR_LETTER_WORDS ) 
print len( FIVE_LETTER_WORDS )