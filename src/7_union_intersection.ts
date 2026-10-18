// Union Type OR
type Status = "PENDING" | "APPROVED" | "REJECTED";

function setStatus(status: Status): void{
    console.log(`Status set to ${status}`);
}

setStatus("APPROVED");

// Intersecction Type AND

