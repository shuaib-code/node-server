import { Schema, model } from "mongoose";
import { Guardian, LocalGurdian, Student, UserName } from "./student.interface";

const userNameSchema = new Schema<UserName>({
	firstName: { type: String, required: true },
	middleName: String,
	lastName: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
	fatherName: { type: String, required: true },
	fatherOccupation: { type: String, required: true },
	fatherContactNo: { type: String, required: true },
	// Add mother details if needed
	motherName: { type: String },
	motherOccupation: { type: String },
	motherContactNo: { type: String },
});

const localGuardianSchema = new Schema<LocalGurdian>({
	name: { type: String, required: true },
	contact: { type: String, required: true },
	address: { type: String, required: true },
});

// Main Student schema
const studentSchema = new Schema<Student>(
	{
		id: { type: String, required: true },
		name: { type: userNameSchema, required: true },
		email: { type: String, required: true, unique: true },
		dateOfBirth: { type: String },
		contact: { type: String, required: true },
		gender: {
			type: String,
			enum: ["male", "female", "custom"],
			required: true,
		},
		bloodGroup: {
			type: String,
			enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
		},
		address: { type: String, required: true },
		guardian: { type: guardianSchema, required: true },
		localGuardian: { type: localGuardianSchema, required: true },
		profileImage: { type: String },
		isActive: { type: String, enum: ["active", "inactive"], required: true },
	},

	{ timestamps: true },
);

const StudentModel = model<Student>("Student", studentSchema);

export default StudentModel;
