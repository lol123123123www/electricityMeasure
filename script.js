function measureVoltage(){
    let j = a.value;
    let c = b.value;

    let v = j/c;
    d.value = v + 'Volts'; 
}


function measureResistivity(){
    let r = e.value;
    let a = f.value;
    let l = g.value;

    let res = (r*a)/l;
    h.value = res + 'ohms';
}


function measureAmpere(){
    let c = j.value;
    let t = k.value;

    let a = c/t;

    m.value=Math.floor(a) + 'amps';
}


function measureResistance(){
    let v = n.value;
    let i = o.value;

    let r = v/i;
    q.value = r;
}