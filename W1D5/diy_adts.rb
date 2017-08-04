class Stack
  def initialize
    # create ivar to store stack here!
      @array = []
  end

  def add(el)
      @array << el
  end

  def remove
    # removes one element from the stack
      @array.pop
  end

  def show
    # return a copy of the stack
      @array.dup
  end
end

stack = Stack.new
p stack.add(2)
p stack.remove

class Queue
    def initialize
       @array = []
    end

    def enqueue(el)
        @array << el
    end

    def dequeue
        @array.shift
    end

    def show
        @array.dup
    end
end

queue = Queue.new
p queue.enqueue(3)
p queue.dequeue

class Map
   def initialize
       @array_map = []
   end

    def assign(key, value)
        @array_map << [key, value]
    end

    def loopup(key)
        @array_map.each do |arr|
            return arr[1] if arr[0] == key
        end
    end

    def remove(key)
        to_be_deleted = nil
        @array_map.each_with_index do |arr, idx|
            if arr[0] == key
                to_be_deleted = idx
            end
        end
        @array_map.delete_at(to_be_deleted)
    end

    def show
        @array_map.dup
    end
end

map = Map.new
p map.assign("Mary", 31)
p map.assign("Bob", 27)
p map.loopup("Mary")
p map.remove("Bob")
p map.show
