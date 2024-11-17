export interface Guardian {
	fatherName: string;
	fatherOccupation: string;
	fatherContactNo: string;
	motherName: string;
	motherOccupation: string;
	motherContactNo: string;
}

export interface UserName {
	firstName: string;
	middleName?: string;
	lastName: string;
}

export interface LocalGurdian {
	name: string;
	occupation: string;
	contact: string;
	address: string;
}

export interface Student {
	id: string;
	name: UserName;
	email: string;
	dateOfBirth?: string;
	contact: string;
	gender: "male" | "female" | "custom";
	bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
	address: string;
	guardian: Guardian;
	localGuardian: LocalGurdian;
	profileImage?: string;
	isActive: "active" | "inactive";
}
