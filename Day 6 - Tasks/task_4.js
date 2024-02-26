class UberCalculator {
    constructor(distance, time) {
      this.distance = distance;
      this.time = time;
    }
  
    calculateTotalCost() {
      const baseFareINR = 75;
      const costPerKilometerINR = 7;
      const costPerMinuteINR = 1.5;
  
      const distanceCost = this.distance * costPerKilometerINR;
      const timeCost = this.time * costPerMinuteINR;
      const totalCostINR = baseFareINR + distanceCost + timeCost;
  
      return totalCostINR.toFixed(2);
    }
  }

  const uberTrip = new UberCalculator(10, 15);
  console.log(`Total Uber Cost: ₹${uberTrip.calculateTotalCost()}`);
  