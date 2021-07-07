const express = require("express");

const Cars = require("../cars/car-model.js");

const router = express.Router();

router.get("/", (req, res) => {
    Cars.get()
    .then(cars => {
        res.json(cars)
    })
    .catch (err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to get cars' });
      })
})

router.post('/', (req, res) => {
    const carData = req.body;
    if (!carData.VIN || !carData.make || !carData.model || !carData.mileage){
      res.status(400).json({ errorMessage: "Please provide VIN, make, model, and mielage for the car." })
    } else {
    Cars.insert(carData)
    .then(car => {
      res.status(201).json(car);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Failed to create new car' });
    });
  }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    if (!changes.VIN || !changes.make || !changes.model || !changes.mileage){
      res.status(400).json( { errorMessage: "Please provide VIN, make, model, and mielage for the car." })
    } else {
      Cars.update(id, changes)
      .then(car => {
        if (car) {
          res.json(car);
        } else {
          res.status(404).json({ message: 'Could not find car with given id' });
        }
      })
      .catch(err => {
          console.log(err)
          res.status(500).json({ message: 'Failed to update car' });
      });
    }
  });

  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Accounts.remove(id)
    .then(deleted => {
        if (deleted) {
            res.status(200).json(deleted)
        } else {
            res.status(404).json({ message: "The account with the specified ID does not exist." })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: "The account could not be removed." })
    })
})






module.exports = router;