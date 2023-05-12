import "./bai1.css"
import {useState, useEffect} from "react";

function Bai1() {
    const [hk1, setHk1] =useState()
    const [hk2, setHk2] =useState()
    const [dtb, setDtb] =useState()
    const [result, setResult] =useState('')
    const [hocluc, setHocluc] =useState('')


    const handleSubmit = () =>{
        setHk1(hk1)
        setHk2(hk2)
        setDtb(prevState => (parseFloat(hk1)+parseFloat(hk2))/2)

    }
    useEffect(() => {
        if (dtb <=3){
            setResult('Khong qua mon')
            setHocluc('kem')
        }
        else if (dtb <7){
            setResult('qua mon')

            setHocluc('trung binh')

        }
        else {
            setResult('qua mon')
            setHocluc('gioi')

        }
    })

    return(

          <div className="container">
              <form id="contact" >
                  <h3>Diem thi cuoi ki</h3>
                  <h4>nhap diem de biet qua hay rot mon</h4>
                  <fieldset>
                      <input
                          value={hk1}
                          onChange={event => setHk1(event.target.value)}
                          placeholder="hoc ki 1" type="text"  autoFocus/>
                  </fieldset>
                  <fieldset>
                      <input
                          value={hk2}
                          onChange={event => setHk2(event.target.value)}
                          placeholder="hoc ki 2" type="text" />
                  </fieldset>
                  <fieldset>
                      <span style={{fontWeight: 'bold',fontSize:'15px'}}>diem trung binh</span><input
                      value={dtb}
                      placeholder="diem trung binh" type="text" required/>
                  </fieldset>
                  <fieldset>
                      <span style={{fontWeight: 'bold',fontSize:'15px'}}>ket qua</span><input placeholder="ket qua"  value={result} type="text" />
                  </fieldset>
                  <fieldset>
                     <span style={{fontWeight: 'bold',fontSize:'15px'}}>ket qua hoc luc</span> <input value={hocluc} placeholder="ket qua hoc luc" type="text" />
                  </fieldset>
                  <p className={"btn-submit"} onClick={handleSubmit}>Submit</p>
              </form>
          </div>

    )
}

export default Bai1;