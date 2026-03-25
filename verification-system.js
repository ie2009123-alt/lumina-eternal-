// verification-system.js

class VerificationSystem {
    constructor() {
        this.users = new Map(); // Stores user verification status and badges
    }

    // Verify a user
    verifyUser(userId) {
        if (!this.users.has(userId)) {
            this.users.set(userId, { verified: true, badges: [] });
            return `${userId} has been verified.`;
        }
        return `${userId} is already verified.`;
    }

    // Assign a badge to a user
    assignBadge(userId, badge) {
        if (this.users.has(userId)) {
            this.users.get(userId).badges.push(badge);
            return `Badge ${badge} has been assigned to ${userId}.`;
        }
        return `User ${userId} not found.`;
    }

    // Get user information
    getUserInfo(userId) {
        if (this.users.has(userId)) {
            return this.users.get(userId);
        }
        return `User ${userId} not found.`;
    }
}

// Example usage:
const verificationSystem = new VerificationSystem();
console.log(verificationSystem.verifyUser('john_doe'));
console.log(verificationSystem.assignBadge('john_doe', 'Newcomer'));
console.log(verificationSystem.getUserInfo('john_doe'));