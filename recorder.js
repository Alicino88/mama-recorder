/*

  This code is part of the Introduction to programming online course exercises
  organised by Aalto University.
  I wrote the entire code except where I say that the lines where given by the teacher :-)

*/

let startRecording = document.querySelector("#start-recording");
let notesList = document.querySelector ("#notes-recorded");
let stopRecording = document.querySelector("#stop-recording");
let button = document.querySelector("#simple-keyboard");
let noteArray = [];

let recording = false;
let synth;

function record (evt){

    startRecording.classList.add('recording');//to add red class
    while (notesList.firstChild) {
      notesList.removeChild(notesList.firstChild);

      noteArray=[];
    }
    recording=true;
}

function playNote(evt) {

    // These lines were given by the instructor
    let note = evt.target.dataset.note;
    synth = synth || new Tone.Synth().toMaster();
    synth.triggerAttackRelease(note, '8n');
    console.log(recording);
    if ((recording===true) && (note !== undefined)){
        noteArray.push(note);//array displayed in the console, the notes I have played, data-note not the inner text

        console.log(noteArray);
    }

  }
//My code again
function displayNotes(evt){
  recording = false;
  let notesList = document.querySelector ("#notes-recorded");
   startRecording.classList.remove('recording');
   for (i=0; i<noteArray.length; i++){
    let newNotes = document.createElement ("li");
    newNotes.innerText = noteArray[i];
    notesList.appendChild(newNotes);
  }

}

startRecording.addEventListener ("click", record);
button.addEventListener ("click", playNote);
stopRecording.addEventListener ("click", displayNotes);
