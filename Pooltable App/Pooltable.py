tables = []
import datetime
import pooltable_class



class PoolTable:
  def __init__(self, occupied):
    self.occupied = True
    self.start_time = datetime.datetime.now()
    self.end_time = datetime.datetime.now()
    self.time_played = ""
    self.cost = 1
    self.identity = ""


  def checkout(self):
    self.occupied == False
    self.start_time = datetime.now()

  def checkin(self):
    self.occupied == True
    self.end_time == datetime.now()

  def time_played(self):
      if self.start_time == None:
        return datetime.now()

  def view_tables():
      i = 1
      print("***Pool tables***")
      for items in tables:
        if items.occupied == "Available":
          print(f"Table {tables} is {items.occupied}")


for index in range(12):
    table = PoolTable(index+1)
    tables.append(table)




while True:  
    print("-----PoolTable Program-----")
    print("Press 1 to Checkout table")
    print("Press 2 to Check-In table")
    print("Press 3 to View Pooltables")
    print("Press q to Quit")
    choice = input("What do you want to do?")   

    if choice == "1":
      checkout()
    if choice == "2":
      checkin()
    if choice == "3":
      view_tables()
    if choice == "q":
        break