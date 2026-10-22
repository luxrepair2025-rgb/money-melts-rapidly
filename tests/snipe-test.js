window.onerror=(m)=>{document.body.setAttribute("data-err",m)};
setTimeout(()=>{const out=[];try{
 showCar();startAuction();auc.bidders.forEach(b=>{b.ceil=auc.price*10;b.drop=2});auc.lead=null;
 auc.left=1.25;S.cash=1e9;playerBid();const p0=auc.price;
 setTimeout(()=>{out.push("snipe-countered:"+(auc.lead==="ai"&&auc.price>p0?"PASS":"FAIL lead="+auc.lead));
  skip();startAuction();auc.bidders.forEach(b=>b.ceil=0);auc.lead=null;auc.left=1.25;playerBid();
  setTimeout(()=>{out.push("over-ceiling-wins:"+(S.lot.length>0?"PASS":"FAIL"));document.body.setAttribute("data-res",out.join(" "))},4000)},3000);
}catch(e){document.body.setAttribute("data-err",e.message)}},500);
