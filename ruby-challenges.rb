# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

#Pseudo Code
#Process: create a method using def and end.
#create a new variable that has an empty array
#array.each will iterate through the array
#do |array| to pass the argument of the array
#create conditional statement
#struggled with placement of array and new_words variable

#output: Unexpected amount of arguments given

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def filtered_words (array, string)
    new_words = []
    array.each do |array|
        if new_words.include?(string)
            selected.string << string 
        end
    end
end
p filtered_words(filter_letter_o)


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], northeast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# # Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 


#PseudoCode
#process: create a def end method with a variable called sorted_array
#pass in the hash as a parameter ?
#create an empty array for the hash to be broken down and sorted into
#use .sort to put the hash in alphabetical order
#set the equivelent of the new array to the hash that has been sorted??
#figure out how to use .flatten to get rid of the nested arrays
# 
def sorted_array (hash)
    sorted_array=[]
    hash.sort
    sorted_array= hash  
end

# array2 = array1.flatten
# alphabetize arr
# hash.sort




# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
#PseudoCode
#Process: create a class called bike that passes in the parameters of model, wheels and current_speed
#initialize in a new def/end method, model wheels, current_speed, not sure if i need to add an integar value to current_speed? Some internet sources said to do so
#create a method called bike_info
class Bike
    attr_reader :model, :wheels, :current_speed
    
    def initialize(model, wheels, current_speed)
        @model = model
        @wheels = wheels
        @current_speed = current_speed [0] #do I put a numerical value here?
    end 

    def bike_info
        "Model: #{@model}, Wheels: ${@wheels}, Current_speed: ${current_speed}."
    end
end

bike_shopping = Bike("")



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0


#I have no idea on this one!!