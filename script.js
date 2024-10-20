function generateMarksheet() {
    const name = document.getElementById('studentName').value;
    const id = document.getElementById('studentID').value;

    // Sample student data
    const studentData = {
        'Abdul Basit': { id: '201', subjects: { Math: 85, English: 75, Urdu: 90, Science: 88 }, totalMarks: 400, obtained: 338 },
        'Muhammad Bilal': { id: '202', subjects: { Math: 78, English: 82, Urdu: 85, Science: 80 }, totalMarks: 400, obtained: 325 },
        'Kiran': { id: '101', subjects: { Math: 77, English: 88, Urdu: 91, Science: 100 }, totalMarks: 400, obtained: 356 },
        'Muhiddin': { id: '102', subjects: { Math: 67, English: 75, Urdu: 80, Science: 85 }, totalMarks: 400, obtained: 307 },
        'Ramla': { id: '103', subjects: { Math: 85, English: 65, Urdu: 72, Science: 78 }, totalMarks: 400, obtained: 300 },
        'Ayesha': { id: '104', subjects: { Math: 85, English: 90, Urdu: 95, Science: 89 }, totalMarks: 400, obtained: 359 },
        'Zain': { id: '105', subjects: { Math: 85, English: 78, Urdu: 79, Science: 80 }, totalMarks: 400, obtained: 322 },
        'Sana': { id: '106', subjects: { Math: 92, English: 85, Urdu: 90, Science: 95 }, totalMarks: 400, obtained: 362 },
        'Hamza': { id: '107', subjects: { Math: 80, English: 70, Urdu: 85, Science: 90 }, totalMarks: 400, obtained: 325 },
        'Sara': { id: '108', subjects: { Math: 92, English: 80, Urdu: 85, Science: 90 }, totalMarks: 400, obtained: 347 },
    };
    

    const student = studentData[name];

    if (student && student.id === id) {
        let details = `Name: ${name}<br>ID: ${student.id}<br>`;
        for (const [subject, marks] of Object.entries(student.subjects)) {
            details += `${subject}: ${marks}/100<br>`;
        }
        details += `Total Obtained: ${student.obtained}<br>Percentage: ${(student.obtained / student.totalMarks * 100).toFixed(2)}%<br>Grade: ${getGrade(student.obtained)}<br>Result: PASS`;
        document.getElementById('marksheetDetails').innerHTML = details;
        document.getElementById('marksheetCard').style.display = 'block';
    } else {
        alert("Student not found or ID does not match!");
    }
}

function getGrade(obtained) {
    const percentage = (obtained / 400) * 100;
    if (percentage >= 90) return 'A';
    if (percentage >= 80) return 'B';
    if (percentage >= 70) return 'C';
    return 'D';
}