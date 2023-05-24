# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

#Pseudo Code
#Process: create a method called filtered_words using def and end.
#Pass in two parameters of an array and a string
#iterate through the array based on the condition that you set using filter, looking for the arugment of |value|, to find the value at each index
#use value.include?  to see if the value includes in a true or false way if the string is present
#p filter_words, pass in the array and the string as arguemnts
#OUPUT:["coffee", "soda water"], ["tea", "water", "soda water"]


# beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

# filter_letter_o = 'o'
# filter_letter_t = 't'


# def filtered_words (array, string)
#     array.filter do |value| 
#         value.include?(string)
#     end
# end
# p filtered_words(beverages_array, filter_letter_o)
# p filtered_words(beverages_array, filter_letter_t)


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = {
     northwest: ['Washington', 'Oregon', 'Idaho'],
     southwest: ['California', 'Arizona', 'Nevada'],
     northeast: ['Maine', 'New Hampshire', 'Rhode Island'] 
    }


#PseudoCode
#process: create a def end method with a variable called sorted_array
#pass in the hash as a parameter ?
#create an empty array for the hash to be broken down and sorted into
#use .sort to put the hash in alphabetical order
#set the equivelent of the new array to the hash that has been sorted??
#figure out how to use .flatten to get rid of the nested arrays
# 
def sorted_array (hash)
    #access the arrays through the hash using a .notation to access the next level down
    #make them one using .flatten
    #sort them out
 #one line in the def, how to pull an array from a hash/object 
end

array2 = array1.flatten
alphabetize arr
hash.sort




# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

#PseudoCode
#Process: create a class called bike that passes in the parameters of model, wheels and current_speed
#initialize in a new def/end method, model wheels, current_speed, not sure if i need to add an integar value to current_speed? Some internet sources said to do so
#create a method called bike_info that returns a string that calls upon the instance variable
#create a new variable called bike_shopping, to add a new Bike to the class Bike
#print the bike_shopping.bike_info to call the new method and the string in that order to return the new variable in the Bike class
#OUTPUT: "The Trek bike has 2 and is going 0."
class Bike
    attr_reader :model, :wheels, :current_speed
    
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0 #do I put a numerical value here?
    end 

    def bike_info
        "The #{@model} bike has #{@wheels} and is going #{@current_speed}."
    end
end

bike_shopping = Bike.new('Trek')
p bike_shopping.bike_info



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0


#I have no idea on this one!!