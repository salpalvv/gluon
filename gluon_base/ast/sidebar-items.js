initSidebarItems({"enum":[["Expr","The representation of gluon's expression syntax"],["Literal",""],["Pattern",""]],"fn":[["is_operator_char",""],["walk_expr",""],["walk_mut_expr",""],["walk_mut_pattern","Walks a pattern, calling `visit_*` on all relevant elements"],["walk_pattern","Walks a pattern, calling `visit_*` on all relevant elements"]],"struct":[["Alternative",""],["Array",""],["Lambda",""],["TypeBinding",""],["TypedIdent",""],["ValueBinding",""]],"trait":[["DisplayEnv",""],["IdentEnv",""],["MutVisitor","Visitor trait which walks over expressions calling `visit_*` on all encountered elements. By default the `visit_*` functions just walk the tree. If they are overriden the user will need to call `walk_mut_*` to continue traversing the tree."],["Typed","Trait which abstracts over things that have a type. It is not guaranteed that the correct type is returned until after typechecking"],["Visitor",""]],"type":[["SpannedExpr",""],["SpannedIdent",""],["SpannedPattern","Pattern which contains a location"]]});