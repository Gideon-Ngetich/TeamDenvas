// Import necessary modules
import Principal "mo:base/Principal";

actor Crowdfunding {

    // Variable to store total contributions
    private var totalContributions: Nat = 0;

    // Correct use of the public keyword for a function that accepts contributions
    public func contribute(amount: Nat) : async Text {
        // Logic to add the contribution to the total
        totalContributions += amount;
        
        // Return a thank you message
        return "Thank you for crowdfunding with us! Your support is greatly appreciated.";
    };

    // Correct declaration of a public query function to retrieve total contributions
    public query func getTotalContributions() : async Nat {
        return totalContributions;
    };
}
