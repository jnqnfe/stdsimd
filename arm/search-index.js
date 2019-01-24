var N=null,E="",T="t",U="u",searchIndex={};
var r_za="std_detect";
var r_aa="core_arch",r_ba="Reverse the order of the bytes.",r_ca="_rev_u16",r_da="_rev_u32",r_ea="Count Leading Zeros.",r_fa="u16",r_ga="u32",r_ha="i32",r_ia="int8x4_t",r_ja="int16x2_t",r_ka="Returns the 16-bit signed saturated equivalent of",r_la="result",r_ma="self",r_na="try_from",r_oa="try_into",r_pa="borrow",r_qa="borrow_mut",r_ra="get_type_id",r_sa="typeid",r_ta="from",r_ua="into",r_va="formatter",r_wa="clone",r_xa="uint8x4_t",r_ya="uint16x2_t";
searchIndex[r_za]={"doc":"Run-time feature detection for the Rust standard library.","i":[[14,"is_x86_feature_detected",r_za,"Prevents compilation if `is_x86_feature_detected` is used…",N,N],[14,"is_aarch64_feature_detected",E,"Prevents compilation if `is_aarch64_feature_detected` is…",N,N],[14,"is_powerpc_feature_detected",E,"Prevents compilation if `is_powerpc_feature_detected` is…",N,N],[14,"is_powerpc64_feature_detected",E,"Prevents compilation if `is_powerpc64_feature_detected` is…",N,N],[14,"is_mips_feature_detected",E,"Prevents compilation if `is_mips_feature_detected` is used…",N,N],[14,"is_mips64_feature_detected",E,"Prevents compilation if `is_mips64_feature_detected` is…",N,N],[14,"is_arm_feature_detected",E,"Checks if `arm` feature is enabled.",N,N]],"p":[]};
searchIndex[r_aa]={"doc":"Architecture-specific intrinsics.","i":[[0,"arch",r_aa,"SIMD and vendor intrinsics module.",N,N],[0,"arm","core_arch::arch","Platform-specific intrinsics for the `arm` platform.",N,N],[3,r_ia,"core_arch::arch::arm","ARM-specific 32-bit wide vector of four packed `i8`.",N,N],[3,r_xa,E,"ARM-specific 32-bit wide vector of four packed `u8`.",N,N],[3,r_ja,E,"ARM-specific 32-bit wide vector of two packed `i16`.",N,N],[3,r_ya,E,"ARM-specific 32-bit wide vector of two packed `u16`.",N,N],[5,"__breakpoint",E,"Inserts a breakpoint instruction.",N,[[[r_ha]]]],[5,r_ca,E,r_ba,N,[[[r_fa]],[r_fa]]],[5,r_da,E,r_ba,N,[[[r_ga]],[r_ga]]],[5,r_ca,E,r_ba,N,[[[r_fa]],[r_fa]]],[5,r_da,E,r_ba,N,[[[r_ga]],[r_ga]]],[5,"_clz_u8",E,r_ea,N,[[["u8"]],["u8"]]],[5,"_clz_u16",E,r_ea,N,[[[r_fa]],[r_fa]]],[5,"_clz_u32",E,r_ea,N,[[[r_ga]],[r_ga]]],[5,"_rbit_u32",E,"Reverse the bit order.",N,[[[r_ga]],[r_ga]]],[5,"qadd",E,"Signed saturating addition",N,[[[r_ha],[r_ha]],[r_ha]]],[5,"qsub",E,"Signed saturating subtraction",N,[[[r_ha],[r_ha]],[r_ha]]],[5,"qadd8",E,"Saturating four 8-bit integer additions",N,[[[r_ia],[r_ia]],[r_ia]]],[5,"qsub8",E,"Saturating two 8-bit integer subtraction",N,[[[r_ia],[r_ia]],[r_ia]]],[5,"qsub16",E,"Saturating two 16-bit integer subtraction",N,[[[r_ja],[r_ja]],[r_ja]]],[5,"qadd16",E,"Saturating two 16-bit integer additions",N,[[[r_ja],[r_ja]],[r_ja]]],[5,"qasx",E,r_ka,N,[[[r_ja],[r_ja]],[r_ja]]],[5,"qsax",E,r_ka,N,[[[r_ja],[r_ja]],[r_ja]]],[5,"sadd16",E,r_ka,N,[[[r_ja],[r_ja]],[r_ja]]],[5,"sadd8",E,"Returns the 8-bit signed saturated equivalent of",N,[[[r_ia],[r_ia]],[r_ia]]],[5,"smlad",E,"Dual 16-bit Signed Multiply with Addition of products and…",N,[[[r_ja],[r_ja],[r_ha]],[r_ha]]],[5,"smlsd",E,"Dual 16-bit Signed Multiply with Subtraction of products…",N,[[[r_ja],[r_ja],[r_ha]],[r_ha]]],[5,"sasx",E,"Returns the 16-bit signed equivalent of",N,[[[r_ja],[r_ja]],[r_ja]]],[5,"sel",E,"Select bytes from each operand according to APSR GE flags",N,[[[r_ia],[r_ia]],[r_ia]]],[5,"shadd8",E,"Signed halving parallel byte-wise addition.",N,[[[r_ia],[r_ia]],[r_ia]]],[5,"shadd16",E,"Signed halving parallel halfword-wise addition.",N,[[[r_ja],[r_ja]],[r_ja]]],[5,"shsub8",E,"Signed halving parallel byte-wise subtraction.",N,[[[r_ia],[r_ia]],[r_ia]]],[5,"shsub16",E,"Signed halving parallel halfword-wise subtraction.",N,[[[r_ja],[r_ja]],[r_ja]]],[5,"smuad",E,"Signed Dual Multiply Add.",N,[[[r_ja],[r_ja]],[r_ha]]],[5,"smuadx",E,"Signed Dual Multiply Add Reversed.",N,[[[r_ja],[r_ja]],[r_ha]]],[5,"smusd",E,"Signed Dual Multiply Subtract.",N,[[[r_ja],[r_ja]],[r_ha]]],[5,"smusdx",E,"Signed Dual Multiply Subtract Reversed.",N,[[[r_ja],[r_ja]],[r_ha]]],[5,"usad8",E,"Sum of 8-bit absolute differences.",N,[[[r_ia],[r_ia]],[r_ga]]],[5,"usad8a",E,"Sum of 8-bit absolute differences and constant.",N,[[[r_ia],[r_ia],[r_ga]],[r_ga]]],[5,"udf",E,"Generates the trap instruction `UDF`",N,N],[11,r_na,E,E,0,[[[U]],[r_la]]],[11,r_ta,E,E,0,[[[T]],[T]]],[11,r_oa,E,E,0,[[[r_ma]],[r_la]]],[11,r_ua,E,E,0,[[[r_ma]],[U]]],[11,r_pa,E,E,0,[[[r_ma]],[T]]],[11,r_qa,E,E,0,[[[r_ma]],[T]]],[11,r_ra,E,E,0,[[[r_ma]],[r_sa]]],[11,r_na,E,E,1,[[[U]],[r_la]]],[11,r_ta,E,E,1,[[[T]],[T]]],[11,r_oa,E,E,1,[[[r_ma]],[r_la]]],[11,r_ua,E,E,1,[[[r_ma]],[U]]],[11,r_pa,E,E,1,[[[r_ma]],[T]]],[11,r_qa,E,E,1,[[[r_ma]],[T]]],[11,r_ra,E,E,1,[[[r_ma]],[r_sa]]],[11,r_na,E,E,2,[[[U]],[r_la]]],[11,r_ta,E,E,2,[[[T]],[T]]],[11,r_oa,E,E,2,[[[r_ma]],[r_la]]],[11,r_ua,E,E,2,[[[r_ma]],[U]]],[11,r_pa,E,E,2,[[[r_ma]],[T]]],[11,r_qa,E,E,2,[[[r_ma]],[T]]],[11,r_ra,E,E,2,[[[r_ma]],[r_sa]]],[11,r_na,E,E,3,[[[U]],[r_la]]],[11,r_ta,E,E,3,[[[T]],[T]]],[11,r_oa,E,E,3,[[[r_ma]],[r_la]]],[11,r_ua,E,E,3,[[[r_ma]],[U]]],[11,r_pa,E,E,3,[[[r_ma]],[T]]],[11,r_qa,E,E,3,[[[r_ma]],[T]]],[11,r_ra,E,E,3,[[[r_ma]],[r_sa]]],[11,"fmt",E,E,0,[[[r_ma],[r_va]],[r_la]]],[11,"fmt",E,E,1,[[[r_ma],[r_va]],[r_la]]],[11,"fmt",E,E,2,[[[r_ma],[r_va]],[r_la]]],[11,"fmt",E,E,3,[[[r_ma],[r_va]],[r_la]]],[11,r_wa,E,E,0,[[[r_ma]],[r_ia]]],[11,r_wa,E,E,1,[[[r_ma]],[r_xa]]],[11,r_wa,E,E,2,[[[r_ma]],[r_ja]]],[11,r_wa,E,E,3,[[[r_ma]],[r_ya]]]],"p":[[3,r_ia],[3,r_xa],[3,r_ja],[3,r_ya]]};
initSearch(searchIndex);addSearchOptions(searchIndex);