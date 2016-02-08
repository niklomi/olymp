Companies = new Mongo.Collection('companies');
Slack_c = new Mongo.Collection('slack');

_tableSub = new SubsManager({
    cacheLimit:50,
    expireIn:30
});

_singleSub = new SubsManager({
    cacheLimit:50,
    expireIn:30
});

Schema = {};

Schema.CompaniesSchema = new SimpleSchema({
    rating:{
        type: Number,
        optional: true
    },
    average_salary: {
        type: Number,
        optional: true
    },
    name: {
        type: String,
        label: "Name",
        max: 20
    },
    link: {
        type: String,
        label: "Link"
    },
    image: {
        type: String,
        label: "Image",
    },
    big_image: {
        type: String,
        label: "Big Image"
    },
    country: {
        type: String,
        label: "Country",
        optional: true
    },
    interview_difficulty: {
        type: Number,
        label: "Interview Difficulty"
    },
    workers_count:{
        type: Number,
        label: "Workers Count"
    },
    work_life_balance:{
        type: Number,
        label: "Work/Life Balance"
    },
    full_name:{
        type: String,
        label: "Full Name"
    },
    founded:{
        type: String,
        label: "Founded"
    },
    revenue:{
        type: Number,
        label: "Revenue",
        decimal: true
    },
    headquarters:{
        type: String,
        label: "Headquarters"
    },
    program_lang:{
        type: [String],
        label: "Program Languages",
        optional: true
    },
    top_universities:{
        type: Number,
        label: "Top Universities",
        optional: true
    },
    people_rating:{
        type: Number,
        label: "People Rating"
    },
    senior_management:{
        type: Number,
        label: "Senior Management"
    },
    culture:{
        type: Number,
        label: "Culture"
    },
    benefits:{
        type: Number,
        label: "Benefits"
    },
    opportunities:{
        type: Number,
        label: "Opportunities"
    },
    remote_friendly:{
        type: Boolean,
        label: "Remote Jobs Friendly",
        optional: true
    },
    nationality:{
        type: [String],
        label: "Nationality",
        optional: true
    },
    entry_schools:{
        type:  [String],
        label: "Entry Level Schools",
        optional: true
    },
    entry_major:{
        type:  [String],
        label: "Entry Level Major",
        optional: true
    },
    entry_degree:{
        type:  Number,
        label: "Entry Level Degree",
        optional: true
    },
    interview_experience:{
        type:  Number,
        label: "Interview Experience",
        optional: true
    },
    "salaries.soft_engineer":{
        type:  Number,
        label: "Software Engineer"
    },
    "salaries.soft_senior_engineer":{
        type:  Number,
        label: "Software Senior Engineer",
        optional: true
    },
    "salaries.product_manager":{
        type:  Number,
        label: "Product Manager",
        optional: true
    },
    "salaries.product_senior_manager":{
        type:  Number,
        label: "Product Senior Manager",
        optional: true
    },
    "salaries.system_engineer":{
        type:  Number,
        label: "System Engineer",
        optional: true
    },
    "salaries.project_manager":{
        type:  Number,
        label: "Project Manager",
        optional: true
    },
    reviews:{
        type: [Object],
        optional: true
    },
    "reviews.$.title": {
        type: String
    },
    "reviews.$.rating": {
        type: Number,
        optional: true
    },
    "reviews.$.author": {
        type: String,
        optional: true
    },
    "reviews.$.text": {
        type: String,
        autoform: {
            rows: 5
        },
        optional: true
    },
    "reviews.$.pros": {
        type: String,
        autoform: {
            rows: 5
        },
        optional: true
    },
    "reviews.$.cons": {
        type: String,
        autoform: {
            rows: 5
        },
        optional: true
    },
    "reviews.$.advice": {
        type: String,
        autoform: {
            rows: 5
        },
        optional: true
    }
});

Companies.attachSchema(Schema.CompaniesSchema);
