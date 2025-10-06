
let map = {
	'c':	0,
	'c#':	1, 'db':	1,
	'd':	2,
	'd#':	3, 'eb':	3,
	'e':	4,
	'e#':	5, 'f':		5,
	'f#':	6, 'gb':	6,
	'g':	7,
	'g#':	8, 'ab':	8,
	'a':	9,
	'a#':	10, 'bb':	10,
	'b':	11, 'cb':	11
   };

let chord_patterns = [
	 // pattern with forceParenthese = true have to come first
	{name: 'flat five', postfix: '<sup>♭5</sup>', pattern: /^[a-g][#b]?\(b5\)(\/[a-g][#b]?)?$/i, notes: [0, 4, 6], forceParenthese: true},
	
	{name: 'power chord', postfix: '5', pattern: /^[a-g][#b]?5(\/[a-g][#b]?)?$/i, notes: [0, 7]},
	{name: 'major', postfix: '', pattern: /^[a-g][#b]?(maj)?(\/[a-g][#b]?)?$/i, notes: [0, 4, 7]},
	{name: 'major6', postfix: '<sup>6</sup>', pattern: /^[a-g][#b]?6(\/[a-g][#b]?)?$/i, notes: [0, 4, 7, 9]},
	{name: 'major6 flat 5', postfix: '<sup>6♭5</sup>', pattern: /^[a-g][#b]?6b5(\/[a-g][#b]?)?$/i, notes: [0, 4, 6, 9]},
	{name: 'major7', postfix: '<sup>7</sup>', pattern: /^[a-g][#b]?7(\/[a-g][#b]?)?$/i, notes: [0, 4, 7, 10]},
	{name: 'major7 flat 5', postfix: '<sup>7♭5</sup>', pattern: /^[a-g][#b]?7b5(\/[a-g][#b]?)?$/i, notes: [0, 4, 6, 10]},
	{name: 'major9', postfix: '<sup>9</sup>', pattern: /^[a-g][#b]?9(\/[a-g][#b]?)?$/i, notes: [0, 4, 7, 10, 14]},
	{name: 'major9 flat 5', postfix: '<sup>9♭5</sup>', pattern: /^[a-g][#b]?9b5(\/[a-g][#b]?)?$/i, notes: [0, 4, 7, 10, 14]},
	{name: 'major13', postfix: '<sup>13</sup>', pattern: /^[a-g][#b]?13(\/[a-g][#b]?)?$/i, notes: [0, 4, 7, 10, 22]},
	{name: 'major13 flat five', postfix: '<sup>13b5</sup>', pattern: /^[a-g][#b]?13b5(\/[a-g][#b]?)?$/i, notes: [0, 4, 6, 10, 22]},		
	{name: 'minor', postfix: 'm', pattern: /^[a-g][#b]?(m|min)(\/[a-g][#b]?)?$/i, notes: [0, 3, 7]},
	{name: 'minor flat 5', postfix: 'm<sup>b5</sup>', pattern: /^[a-g][#b]?(m|min)b5(\/[a-g][#b]?)?$/i, notes: [0, 3, 6]},
	{name: 'minor7', postfix: 'm<sup>7</sup>', pattern: /^[a-g][#b]?(m|min)7(\/[a-g][#b]?)?$/i, notes: [0, 3, 7, 10]},
	{name: 'minor7 flat five', postfix: 'm<sup>7b5</sup>', pattern: /^[a-g][#b]?(m|min)7b5(\/[a-g][#b]?)?$/i, notes: [0, 3, 6, 10]},
	{name: 'minor6', postfix: 'm<sup>6</sup>', pattern: /^[a-g][#b]?(m|min)6(\/[a-g][#b]?)?$/i, notes: [0, 3, 7, 9]},
	{name: 'minormajor7', postfix: 'm<sup>maj7</sup>', pattern: /^[a-g][#b]?(m|min)maj7(\/[a-g][#b]?)?$/i, notes: [0, 3, 7, 11]},
	{name: 'minormajor9', postfix: 'm<sup>maj9</sup>', pattern: /^[a-g][#b]?(m|min)maj9(\/[a-g][#b]?)?$/i, notes: [0, 3, 7, 11, 14]},
	{name: 'maj7', postfix: 'maj7', pattern: /^[a-g][#b]?maj7(\/[a-g][#b]?)?$/i, notes: [0, 4, 7, 11]},
	{name: 'maj7 flat five', postfix: 'maj7<sup>b5</sup>', pattern: /^[a-g][#b]?maj7b5(\/[a-g][#b]?)?$/i, notes: [0, 4, 6, 11]},
	{name: 'maj9', postfix: 'maj9', pattern: /^[a-g][#b]?maj9(\/[a-g][#b]?)?$/i, notes: [0, 4, 7, 11, 14]},
	{name: 'maj9 flat five', postfix: 'maj9<sup>b5</sup>', pattern: /^[a-g][#b]?maj9b5(\/[a-g][#b]?)?$/i, notes: [0, 4, 6, 11, 14]},
	{name: 'maj13', postfix: 'maj13', pattern: /^[a-g][#b]?maj13(\/[a-g][#b]?)?$/i, notes: [0, 4, 7, 11, 22]},
	{name: 'maj13 flat five', postfix: 'maj13<sup>b5</sup>', pattern: /^[a-g][#b]?maj13b5(\/[a-g][#b]?)?$/i, notes: [0, 4, 6, 11, 22]},
	{name: 'dim', postfix: 'dim', pattern: /^[a-g][#b]?dim(\/[a-g][#b]?)?$/i, notes: [0, 3, 6]},
	{name: 'dim7', postfix: 'dim<sup>7</sup>', pattern: /^[a-g][#b]?dim7(\/[a-g][#b]?)?$/i, notes: [0, 3, 6, 9]},
	{name: 'minor add 9', postfix: 'm<sup>add9</sup>', pattern: /^[a-g][#b]?(m|min)add9(\/[a-g][#b]?)?$/i, notes: [0, 3, 7, 14]},
	{name: 'minor add 9 flat five', postfix: 'm<sup>add9b5</sup>', pattern: /^[a-g][#b]?(m|min)add9b5(\/[a-g][#b]?)?$/i, notes: [0, 3, 6, 14]},			
	{name: 'minor9', postfix: 'm<sup>9</sup>', pattern: /^[a-g][#b]?(m|min)9(\/[a-g][#b]?)?$/i, notes: [0, 3, 7, 10, 14]},
	{name: 'minor9 flat five', postfix: 'm<sup>9b5</sup>', pattern: /^[a-g][#b]?(m|min)9b5(\/[a-g][#b]?)?$/i, notes: [0, 3, 6, 10, 14]},
	{name: 'major add 9', postfix: '<sup>add9</sup>', pattern: /^[a-g][#b]?add9(\/[a-g][#b]?)?$/i, notes: [0, 4, 7, 14]},
	{name: 'major add 9 flat five', postfix: '<sup>add9♭5</sup>', pattern: /^[a-g][#b]?add9b5(\/[a-g][#b]?)?$/i, notes: [0, 4, 6, 14]},
	{name: 'augumented', postfix: 'aug', pattern: /^[a-g][#b]?(aug|\+)(\/[a-g][#b]?)?$/i, notes: [0, 4, 8]},
	{name: 'augumented 7', postfix: 'aug7', pattern: /^[a-g][#b]?(aug|\+)7(\/[a-g][#b]?)?$/i, notes: [0, 4, 8, 10]},
	{name: 'augumented maj7', postfix: 'aug<sup>(maj7)</sup>', pattern: /^[a-g][#b]?(aug|\+)maj7(\/[a-g][#b]?)?$/i, notes: [0, 4, 8, 11]},
	{name: 'sus2', postfix: 'sus2', pattern: /^[a-g][#b]?sus2(\/[a-g][#b]?)?$/i, notes: [0, 2, 7]},
	{name: 'sus4', postfix: 'sus4', pattern: /^[a-g][#b]?sus4(\/[a-g][#b]?)?$/i, notes: [0, 5, 7]},
	{name: 'sus2flat5', postfix: 'sus2', pattern: /^[a-g][#b]?sus2b5(\/[a-g][#b]?)?$/i, notes: [0, 2, 6]},
	{name: 'sus4flat5', postfix: 'sus4', pattern: /^[a-g][#b]?sus4b5(\/[a-g][#b]?)?$/i, notes: [0, 5, 6]},
	{name: 'seven flat five', postfix: '<sup>7♭5</sup>', pattern: /^[a-g][#b]?7b5(\/[a-g][#b]?)?$/i, notes: [0, 4, 6, 10]},
	
	// template chords
	{name: 'add n', postfixStart: '<sup>add', postfixEnd: '</sup>', pattern: /^[a-g][#b]?add([b#]?[1-9]{1,2})(\/[a-g][#b]?)?$/i, notes: [0, 4, 7, 'n'], template: true},
	{name: 'minor add n', postfixStart: 'm<sup>add', postfixEnd: '</sup>', pattern: /^[a-g][#b]?(m|min)add([b#]?[1-9]{1,2})(\/[a-g][#b]?)?$/i, notes: [0, 4, 7, 'n'], template: true},
];

let scale_map = {
	'1':	0,
	'b2':	1,
	'2':	2,
	'#2':	3,
	'b3':	3,
	'3':	4,
	'#3':	5,
	'b4':	4,
	'4':	5,
	'#4':	6,
	'b5':	6,
	'5':	7,
	'#5':	8,
	'b6':	8,
	'6':	9,
	'#6':	10,
	'b7':	9,
	'7':	10,
	'#7':	11,
	'8':	12,
	'b9':	13,
	'9':	14,
	'#9':	15,
	'b10':	15,
	'10':	16,
	'#10':	17,
	'b11':	16,
	'11':	17,
	'#11':	18,
	'b12':	18,
	'12':	19,
	'#12':	20,
	'b13':	21,
}
	 

let loaded = false;
let play = false;
let play_metronome = true;
let sequence;

let velocity= 127;
let channel = {'chord': 0, 'drum': 1};

let loop_label_play = '<i class="fa fa-play"></i> Loop';
let loop_label_stop = '<i class="fa fa-stop"></i> Stop';

let drum_sound = 42;

let volume = {'chord': 127, 'drum': 10};

let last_chord;

let humanize = 10;
let staccato_legato = 0.25;

let start_at_bar = 0;
let start_at_chord = 0;
 
function bar_length()
{
	return ( 60 / Number ( $('#bpm').val() ) ) * Number ( $('#beats_per_bar').val() ) ;
}

function linearTrans (x1, x2, a, b, c)
{
	return x1 + ((x2 - x1)/(b - a)) * (c - a);
}

function loopSequence (seq)
{	
	let min_note = Infinity;
	let max_note = -Infinity;
	
	function playBeat() {
		MIDI.setVolume (channel['drum'], volume['drum']);
		MIDI.noteOn (channel['drum'], drum_sound, 127, 0);
		
		let beats = Number ( $('#beats_per_bar').val() );
		for (let b=1; b<beats; b++)
		{
			MIDI.noteOn (channel['drum'], drum_sound, 127, (bar_length() / beats) * b );
		}
	}
	
	function playChord (bar_c, chord_c, beat=false)
	{				
		if (play == true)
		{
			if (seq[bar_c][chord_c].notes != null)
			{
				let inversion = seq[bar_c][chord_c].notes;
				if (last_chord)
				{
					if ( $('#voice_leading').is (':checked') )
					{
						inversion = voiceLeading (last_chord, inversion);
					}
				}
				
				/*if (last_chord)
				{
					//MIDI.chordOff (channel['chord'], last_chord, 0);
					for (let [n, d] of Object.entries (last_chord) )
					{
						if ( !inversion.includes (n))
						{
							MIDI.noteOff (channel['chord'], n, 0);
						}
						
					}
				}*/
				
				MIDI.setVolume (channel['chord'], volume['chord']);
				
				played = [];
				for (let n of inversion)
				{
					if ( last_chord == null || !Object.keys (last_chord).includes (n)/* || Date.now() - Object.values ( Object.entries (last_chord).find ( (ln, ld) => ln == n ) )[0] > max_note_length */ )
					{
						min_note = Math.min (min_note, n);
						max_note = Math.max (max_note, n);
						
						let vel_off = linearTrans (100, 127, 0, 127, humanize);
						let vel =  (127 - vel_off) + Math.floor ( Math.random() * vel_off );
						let off =  Math.random() * (humanize / 100);
						MIDI.noteOn (channel['chord'], n, vel, off);
						played.push ({n: Date.now()});
						
						let timeout = seq[bar_c][chord_c].duration * 1000;
						setTimeout (()=> {
							MIDI.noteOff (channel['chord'], n, 0);
						}, timeout - (timeout * staccato_legato)  );
					}
					
					  $([document.documentElement, document.body]).animate({
							scrollTop: $(`#chord_${bar_c}_${chord_c}`).offset().top - ( $('#content').height() + 100 )
						}, 100);
				}
				
				//MIDI.chordOn (channel['chord'], seq[bar_c][chord_c].notes, velocity, 0);
				
				last_chord = played;
			}
			
			if (beat && play_metronome) 
			{
				/*MIDI.setVolume (channel['drum'], volume['drum']);
				MIDI.noteOn (channel['drum'], drum_sound, 127, 0);
				
				let beats = Number ( $('#beats_per_bar').val() );
				for (let b=1; b<beats; b++)
				{
					MIDI.noteOn (channel['drum'], drum_sound, 127, (bar_length() / beats) * b );
				}*/
				playBeat();
			}
			
			$(`#chord_${bar_c}_${chord_c}`).addClass ('play');
			
			let next_call;
			if (bar_c < seq.length && chord_c < seq[bar_c].length - 1)
			{
				next_call = function() { playChord (bar_c, chord_c + 1); }
			}
			else if (bar_c < seq.length - 1)
			{
				next_call = function () { playChord (bar_c + 1, 0, true); }
			}
			else
			{
				next_call = function () { playChord (0, 0, true); }
			}
			
			setTimeout ( function()
			{
				$(`#chord_${bar_c}_${chord_c}`).removeClass ('play');
				next_call();
			}, seq[bar_c][chord_c].duration * 1000 );
		}
		else if (play == 'stop')
		{
			play = false; // confirm stopping
		}
	}
	
	let start_bar = start_at_bar;
	let start_chord = start_at_chord;
	
	
	let count_in = $('#count_in').is (':checked');
	let pre_delay = count_in ? bar_length() * 1000 : 0;
	
	
	if (count_in)
	{
		/*MIDI.setVolume (channel['drum'], volume['drum']);
		MIDI.noteOn (channel['drum'], drum_sound, 127, 0);
		
		let beats = Number ( $('#beats_per_bar').val() );
		for (let b=1; b<beats; b++)
		{
			MIDI.noteOn (channel['drum'], drum_sound, 127, (bar_length() / beats) * b );
		}*/
		playBeat();
	}
	
	setTimeout ( () => {
		playChord (start_at_bar, start_at_chord, seq[start_at_bar][start_at_chord].duration);
	}, pre_delay);
}

function formatChord (chord)
{
	return chord[0].toUpperCase() + ( chord.length > 1 ? ( chord[1] == '#' ? '#' : (chord[1] == 'b' ? '♭' : '') ) : '' )
}

function parseInput()
{
	//if (loaded)
	//{
		let query = $('#chords').val().replace(/\s\s+/g, ' ').replace (/\s?[\|,;]\s?/g, '|').replace (/\([\|,;]\)/g, '').trim();
		let repeat = true;
		while (repeat) {
			repeat = false;
			query = query.replace (/:(.*?):([0-9])?/g, function (a,b,c) {
				let n = Number (c ?? 1);
				let arr = Array (n + 1).fill (b);
				repeat = true;
				return arr.join (',');
			});
		}

		let query_bars = query.split (/[|,;]+/);
		
		let sequence = [];
		
		for (let b of query_bars)
		{
			let query_chords = b.split (' ');
			let bar = [];
			
			for (let c of query_chords)
			{
				if (c != '')
				{
					let octave = 4;
					
					let notes = [];
					let str = '';
					
					if (c == '%') // repeat last chord
					{

						for (offset = 1; offset <= bar.length && bar[bar.length - offset] == null; offset++) {}
						if (bar[bar.length - offset] != null)
						{
							bar[bar.length - offset].duration *= 2;
						}
						
						bar.push ({
							'duration': 0,
							'symbol': ''
						});
					}
					else if (c == '_') // pause
					{
						bar.push ({
							'duration': bar_length() / query_chords.length,
							'symbol': ''
						});
					}
					else
					{
						found = false;
						for (let p of chord_patterns)
						{
							let m;
							if ( Array.isArray (p.pattern) )
							{
								for (let pp of p.pattern)
								{
									m = ( pp.forceParenthese ? c : c.replace (/\(|\)/g, '') ).toLowerCase().match (pp);
									if (m) break;
								}
							}
							else
							{
								m = ( p.forceParenthese ? c : c.replace (/\(|\)/g, '') ).toLowerCase().match (p.pattern);
							}
							
							if (m)
							{
								let root = map[c[0].toLowerCase()] + octave*12;
								if (c.length >= 2)
								{
									if (c[1] == '#') root++;
									if (c[1] == 'b') root--;
								}
								
								let chord;
								
								if (p.template == true)
								{
									let group = m.length - 1;
									if (m[group] == null || m[group][0] == '/') group = m.length - 2;
									chord = {
										'notes': p.notes.map ( (x) => { return x == 'n' ? scale_map[m[group]] + root : x + root } ),
										'duration': bar_length() / query_chords.length,
										'symbol': c[0].toUpperCase() + ( c.length > 1 ? ( c[1] == '#' ? '#' : (c[1] == 'b' ? '♭' : '') ) : '' ) + p.postfixStart + m[group].replace (/b/g, '♭') + p.postfixEnd
									}
								}
								else
								{
									chord = {
										'notes': p.notes.map ( (x) => { return x + root } ),
										'duration': bar_length() / query_chords.length,
										'symbol': c[0].toUpperCase() + ( c.length > 1 ? ( c[1] == '#' ? '#' : (c[1] == 'b' ? '♭' : '') ) : '' ) + p.postfix
									}
								}
								
								// add bass note
								// slash chords
								let slash_group = m.length - 1;
								if (m.length >= 2 && m[slash_group] != null && m[slash_group][0] == '/')
								{
									chord.notes.unshift ( map[m[slash_group].slice(1)] + (octave -1 ) * 12 );
									if (m[slash_group].length > 2 && m[slash_group][m[slash_group].length - 1] == 'b')
									{
										chord.symbol += m[slash_group].toUpperCase().substring (0, m[slash_group].length - 1) + '♭';
									}
									else
									{
										chord.symbol += m[slash_group].toUpperCase();
									}
									
								}
								else // normal chord (no slash)
								{
									chord.notes.unshift (root - 12);
								}
								
								bar.push (chord);
								
								found = true;
								break;
							}
						}
						
						if (!found)
						{
							// chord not recognized
							bar.push ({
									'notes': [],
									'duration': 0,
									'symbol': `<span style="color: red;">${c}</span>`
								});
						}
					}
				}
			}
			
			if (bar.length > 0)
			{
				sequence.push (bar);
			}
		}
		
		if ( $('#chords').get(0).selectionStart >= $('#chords').val().length )
		{
			$([document.documentElement, document.body]).animate({
				scrollTop: $(document).height()
			}, 100);
		}
		
		return sequence;
	//}
}

function changeVolume (c, v)
{
	volume[c] = v;
	MIDI.setVolume (channel['chord'], volume[c]);		
}

function changeBPM()
{
	let restart = play;
	
	if (play == true)
	{
		$('#loop').attr ('disabled', 'disabled');
		$('#loop').html ('... loading ...');
		
		stop();
	}
	
	for (let bar of sequence)
	{
		for (let chord of bar)
		{
			chord.duration = bar_length() / bar.length;
		}
	}
	
	function startMetronome()
	{
		if (play == false && play_metronome == false)
		{
			$('#loop').removeAttr ('disabled');
			$('#loop').html (loop_label_stop);
			start();
		}
		else
		{
			setTimeout (startMetronome, 500);
		}
	}
	
	if (restart == true)
	{
		startMetronome();
	}
}

function changeHumanize()
{
	humanize = $('#humanize').val();
}

function loadLocalStorage()
{
	let docs = localStorage.getItem ('docs') ? localStorage.getItem ('docs') : '[]';
	try {
		// new json format
		docs = JSON.parse (docs);
	} catch (e) {
		docs = ( docs.split ('+++').filter ( d => d != '' ) || []).map ( (p) => ({'beats': 4, progression: p}) ); // stay compatible with old string format
	};
	
	return docs;
}


function save()
{
	let docs = loadLocalStorage();
	if ( docs.filter ( d => d.progression.trim() == $('#chords').val().trim() ).length == 0 )
	{
		docs.push ({progression: $('#chords').val().trim(), beats: $('#beats_per_bar').val()});
	}
	
	localStorage.setItem ('docs', JSON.stringify (docs) );
	updateloadlist();
	
	$('#save').animate({
		opacity: '0.5'
	},
	{
		complete: function ()
		{
			$('#save').animate({
				opacity: '1'
			});
		}
	});
}

function updateloadlist()
{
	let docs = loadLocalStorage();
	
	$('#load').empty();
	let s = '';
	for (let d of docs)
	{
		if (d && d.progression && d.progression.trim() != '')
		{
			s += `<div class="loaditem"><span onclick="loadProgression ('${d.progression}', ${parseInt (d.beats)})">${d.progression}</span> <i class="fa fa-trash" onclick="remove ('${d.progression}')"></i></div>`;
		}
	}
	$('#load').html (s);
	
	if ( s.trim() != '' )
	{
		$('#showLoad').removeAttr ('disabled');
	}
	else
	{
		$('#showLoad').attr ('disabled', 'disabled');
	}
}

function remove (str)
{
	let docs = loadLocalStorage().filter ( d => d.progression != 'str' );
	localStorage.setItem ('docs', JSON.stringify (docs) );
	
	if (docs != null )
	{
		
		docs.progression = docs.replace (str + '+++', '');
		
		updateloadlist();
	}
}

let curr_transpose = 0;
function transpose (offset)
{			
	let scale = ['A', ['A#', 'B♭'], 'B', 'C', ['C#', 'D♭'], 'D', ['D#', 'E♭'], 'E', 'F', ['F#', 'G♭'], 'G', ['G#', 'A♭']];
	
	let new_roots = [];
	
	for (let bar of sequence)
	{
		for (let chord of bar)
		{
			for (let n in chord.notes)
			{
				chord.notes[n] += offset;
			}
			
			let root = chord.symbol.substring (0, chord.symbol[1] == '#' || chord.symbol[1] == '♭' ? 2 : 1);
			for ( const [i, s] of scale.entries() )
			{
				if ( ( !Array.isArray (s) && s == root ) || ( Array.isArray (s) && s.includes (root) ) )
				{
					new_roots.push (scale[(i + offset) % scale.length]);
				}
			}
			
		}
	}
	
	let sharps = 0;
	let flats = 0;
	
	for (const [i, r] of new_roots.entries())
	{
		if ( Array.isArray (r) )
		{
			if ( new_roots.includes (r[0][0]) )
			{
				//new_roots[i] = r[1];
				flats++;
			}
			else if ( new_roots.includes (r[1][0]) )
			{
				//new_roots[i] = r[0];
				sharps++;
			}
		}
	}
	
	for (const [i, r] of new_roots.entries())
	{
		if ( Array.isArray (r) )
		{
			new_roots[i] = r[flats > sharps ? 1 : 0];
		}
	}
	
	curr_transpose += offset;
	$('#transposeUpDisplay').html ('');
	$('#transposeDownDisplay').html ('');
	if (curr_transpose != 0)
	{
		$('#transpose' + (curr_transpose > 0 ? 'Up' : 'Down') + 'Display').html ( (curr_transpose > 0 ? '+' : '') + curr_transpose);
	}
}
	

function render()
{
	
	$('#parsed').empty();
	for ( const [b, bar] of sequence.entries() )
	{
		let bar_div = $('<div class="bar"></div>');
		for ( const [c, chord] of bar.entries() )
		{
			if (chord != null)
			{
				let chord_element = $(`<div class="chord" id="chord_${b}_${c}" style="width: ${ (chord.duration / bar_length() ) * 1500 - 30}px;">${chord != null ? chord.symbol : '%'}</div>`);
				chord_element.click ( function()
				{
					stop();
					$('.chord').removeClass ('play');
					$(this).addClass ('play');
					start_at_bar = b;
					start_at_chord = c;
				});
				bar_div.append (chord_element);
			}
		}
		
		$('#parsed').append (bar_div);
	}
}

function loopUI()
{	
	$('#loop').html ( $('#loop').html() == loop_label_play ? loop_label_stop : loop_label_play);
				
	if (!play)
	{
		start();
		$('#parsed').show();
		$('#inputSection').show();
		
		$('.menuItem').hide();
	}
	else
	{	
		stop();
		play_metronome = false;
		//stopAllNotes();
	}
}

function stopAllNotes()
{
	function waitForConfirm()
	{
		$('#loop').attr ('disabled', 'disabled');
		MIDI.setVolume (0, 10);
		
		 // wait for confirmation
		if (play == false)
		{
			//$('#loop').removeAttr ('disabled');
			//MIDI.setVolume (0, 127);
		}
		else
		{
			setTimeout (waitForConfirm, 500);
		}
	}
	
	waitForConfirm();
}

function start()
{
	play_metronome = true;
	//metronome();
	play = true;
	loopSequence (sequence);
}

function stop()
{
	if (play == true)
	{
		play = 'stop';
	}
	
	//stopAllNotes();
	
	if (play_metronome == true)
	{
		play_metronome = false;
	}
	
	$('#loop').html ('waiting for stop...');
	$('#loop').attr ('disabled', 'disabled');
	
	function waitForConfirm()
	{
		 // wait for confirmation
		if (play == false)
		{
			$('#loop').removeAttr ('disabled');
			$('#loop').html (loop_label_play);
		}
		else
		{
			setTimeout (waitForConfirm, 500);
		}
	}
	
	waitForConfirm();
}


function show (id)
{
	$('.menuItem').not ('#' + id).hide();
	$('#' + id).toggle();
	window.scrollTo (0, 0);
	
	if (id == 'share')
	{
		let url = window.location.href.split('?')[0];
		$('#share_link').val ( url + '?progression=' + encodeURIComponent ( $('#chords').val() ) + '&beats=' + encodeURIComponent ( $('#beats_per_bar').val() ) );
	}
	
	if (! ['play', 'save'].includes (id) )
	{
		$('#parsed').hide();
		$('#inputSection').hide();
	}
	else
	{
		$('#parsed').show();
		$('#inputSection').show();
	}
}

function loadProgression (prog, beats=4)
{
	start_at_bar = 0;
	start_at_chord = 0;
	
	$('#chords').val (prog);
	stop();
	sequence = parseInput();
	render();
	$('.menuItem').hide();
	$('#loop').html (loop_label_play);
	
	$('#beats_per_bar').val (beats);
	
	$('#parsed').show();
	$('#inputSection').show();
	setTimeout ( function() { window.scrollTo (0, 0); }, 1000 );
	
}

function toggleMetronome()
{
	if (play_metronome)
	{
		play_metronome = false;
		$('#bpm_icon').attr ('class', 'fas fa-heart-broken');
	}
	else
	{
		play_metronome = true;
		$('#bpm_icon').attr ('class', 'fas fa-heartbeat');
	}
}

function selectDrum()
{
	drum_sound = $('#selectDrum').val();
}

function selectSound ()
{
	MIDI.programChange (channel['chord'], MIDI.GM.byName[ $('#selectSound').val() ].number);
	let o = $('#selectSound :selected');
	if ( o.attr ('data-humanize') )
	{
		$('#humanize').val ( o.attr ('data-humanize') );
		$('#humanize_value').html ( o.attr ('data-humanize') );
		changeHumanize();
	}
	
	if ( o.attr ('data-volume') )
	{
		$('#vol').val ( o.attr ('data-volume') );
		$('#vol_value').html ( o.attr ('data-volume') );
		changeVolume();
	}
	
}

 // returns inversion of chord2
function voiceLeading (chord1, chord2)
{
	let result = [chord2[0]]; // keep bass note unchanged
	for (let note2 of chord2.slice (1) ) // dont use bass note for voice leading
	{
		let minDiff = Infinity;
		let minOctave = null;
		for (let octave of [0, 12, -12])
		{
			for ( let note1 of chord1.slice (1) ) // dont use bass note for voice leading
			{
				let currDiff = Math.abs ( note1 - (note2 + octave) );
				if (currDiff < minDiff)
				{
					minDiff = currDiff;
					minOctave = octave;
				}
			}
		}
		
		result.push (note2 + minOctave);
	}
	
	return result;
}

function copyClipboard()
{
	$('#share_link').select();
	document.execCommand ('copy');
}

$(document).ready ( () => {
				
	const params = new Proxy (new URLSearchParams (window.location.search), {
		get: (searchParams, prop) => searchParams.get(prop),
	});
	if (params.progression)
	{
		$('#chords').val (params.progression);
	}
	if (params.beats)
	{
		$('#beats_per_bar').val (params.beats);
	}
	if (params.bpm)
	{
		$('#bpm').val (params.bpm);
		$('#bpm_value').html (params.bpm)
	}
	
	
	
	sequence = parseInput();
	render();
			
	MIDI.loadPlugin({
		targetFormat: 'mp3',
		//soundfontUrl: "MIDI.js/examples/soundfont/",
		soundfontUrl: "soundfonts/FluidR3_GM/",
		//soundfontUrl: "soundfonts/choir/",
		instruments: ['acoustic_grand_piano', 'acoustic_guitar_nylon', 'acoustic_guitar_steel', 'electric_guitar_clean', 'steel_drums', 'pad_2_warm'],
		//instrument: 'acoustic_guitar_nylon',
		/*onprogress: function(state, progress) {
			if (state == 'load')
			{
				$('#progress').html ( Math.round (progress * 100) + '%' );
			}
		},*/
		onsuccess: function() {
			MIDI.programChange (channel['chord'], MIDI.GM.byName["acoustic_grand_piano"].number);
			MIDI.programChange (channel['drum'], MIDI.GM.byName["steel_drums"].number);
			MIDI.setVolume (1, volume);
			loaded = true;
			//$('#loading').hide();
			//$('#content').show();
			
			 $('#loop').html ('<i class="fa fa-play"></i> Loop');
			 $('#loop').removeAttr ('disabled'); 
			 
		}
	});
	
	updateloadlist();
	
	$('#chords').focus ( () => {
		$('#keyboard').show();
	});
	
	$('#chords').blur ( () => {
		setTimeout ( () => {
			if ( ! $('#chords').is (':focus') ) {
			//	$('#keyboard').hide();
			}
		}, 500);
	});
	
	$('#chords').keyup ( () => {
		$('#loop').html (loop_label_play);
		stop();
		sequence = parseInput();
		render();
		
	});
	
	$('body').keyup (function(e) {
	   if ( $(':focus').length == 0 && e.keyCode == 32) {
		   loopUI();
	   }
	});
	
	// virtual keyboard
	let layouts = {
		0: {
			'A': 1,
			'B': 1,
			'C': 1,
			'D': 1,
			'E': 1,
			'F': 1,
			'G': 1,
		},
		1: {'m': 2,
			'#': 3,
			'b': 3,
			'7': 9,
			'9': 9,
			'maj': 4,
			'add': 5,
			'sus': 12,
			'/': 7,
			'special_keys': ['next_chord', 'next_bar']
		},
		2: {'7': 9,
			'9': 9, 
			'add': 5,
			'maj': 4,
			'/': 0,
			'special_keys': ['next_chord', 'next_bar']
		},
		3: {'m': 2,
			'maj': 4,
			'add': 5,
			'/': 0
		},
		4: {'7': 9,
			'9': 9,
			//'special_keys': ['next_chord', 'next_bar']
		},
		5: {'#': 6,
			'b': 6,
			'1': 9,
			'2': 9,
			'3': 9,
			'4': 9,
			'5': 9,
			'6': 9,
			'7': 9,
			'8': 9,
			'9': 9,
			//'special_keys': ['next_chord', 'next_bar']
		},
		6: {'0': 9,
			'1': 9,
			'2': 9,
			'3': 9,
			'4': 9,
			'5': 9,
			'6': 9,
			'7': 9,
			'8': 9,
			'9': 9,
		},
		7: {
			'A': 8,
			'B': 8,
			'C': 8,
			'D': 8,
			'E': 8,
			'F': 8,
			'G': 8,
			'special_keys': ['next_chord', 'next_bar']
		},
		8: {
			'#': 11,
			'b': 11,
		},
		9: {
			'/': 7,
			'special_keys': ['next_chord', 'next_bar']
		},
		10: {
			'1': 6,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
		},
		11: {
			'special_keys': ['next_chord', 'next_bar']
		},
		12: {
			'4': 9,
			'2': 9,
			'special_keys': ['next_chord', 'next_bar']
		},
		
	};
	
	let display =  {
		'b': '♭',
		'backspace': '⇦',
		'clear': '⨂',
		'next_chord': 'next chord',
		'next_bar': 'next bar'
	}
	
	let curr_layout = 0;
	
	let special_keys = ['clear', 'backspace', 'next_chord', 'next_bar'];
	
	function buildLayout (l)
	{
		console.log ('loadLayout', l);
		console.log ('layout', layouts[l]);
		let show_normal_keys = Object.keys (layouts[l]).filter (x => !['special_keys', ...special_keys].includes (x) ).join (' ');
		let show_special_keys = ['clear', 'backspace', ...(layouts[l].special_keys || [])].join (' ')
		let show_keys = [];
		if (show_normal_keys.trim().length > 0)
		{
			show_keys.push (show_normal_keys);
		}
		if (show_special_keys.trim().length > 0)
		{
			show_keys.push (show_special_keys);
		}
		
		
		return {'default': show_keys };
	}
	
	let Keyboard = SimpleKeyboard.default;

	let keyboard = new Keyboard({
		onKeyPress: button => onKeyPress(button),
		layout: buildLayout (curr_layout),
		display: display
	});
	
	function onKeyPress (button) {
		console.log("Button pressed", button);
		
		 // special keys
		if (button == 'clear')
		{
			document.querySelector(".simple-keyboard-input").value = '';
			curr_layout = 0;
		}
		else if (button == 'backspace')
		{
			document.querySelector(".simple-keyboard-input").value = document.querySelector(".simple-keyboard-input").value.slice (0, -1);
			curr_layout = 0;
		}
		else if (button == 'next_chord')
		{
			document.querySelector(".simple-keyboard-input").value += ' ';
			curr_layout = 0;
		}
		else if (button == 'next_bar')
		{
			document.querySelector(".simple-keyboard-input").value += ' | ';
			curr_layout = 0;
		}
		// normal keys
		else
		{
			document.querySelector(".simple-keyboard-input").value += button;
			curr_layout = layouts[curr_layout][button];
		}
		
		keyboard.setOptions({
			layout: buildLayout (curr_layout),
			display: display
		});
		
		sequence = parseInput();
		render();
		
		setTimeout ( () => {
			$('#chords').focus();
		}, 200);
	}
				
});

function showHelp()
{
	$('#help').toggle();
	$('#examples').hide();
}

