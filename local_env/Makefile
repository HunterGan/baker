# EnvFiles
ifneq (,$(wildcard .env))
	include .env
	export
endif
ifneq (,$(wildcard env/public.env))
	include env/public.env
	export
endif
ifneq (,$(wildcard env/public.local.env))
	include env/public.local.env
	export
endif
ifneq (,$(wildcard env/common.env))
	include env/common.env
	export
endif
ifneq (,$(wildcard env/common.local.env))
	include env/common.local.env
	export
endif
ifneq (,$(wildcard env/service/ui/ui.env))
	include env/service/ui/ui.env
	export
endif
ifneq (,$(wildcard env/service/backend/backend.env))
	include env/service/backend/backend.env
	export
endif
