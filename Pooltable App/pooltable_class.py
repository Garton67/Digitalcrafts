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